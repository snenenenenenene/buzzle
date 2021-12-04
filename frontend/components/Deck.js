import { useRef, useEffect, useState, Children } from "react";
import { motion, useMotionValue, useAnimation } from "framer-motion";
import Image from "next/image";

export const Stack = ({ onVote, children, ...props }) => {
  const [stack, setStack] = useState(Children.toArray(children));

  const pop = (array) => {
    return array.filter((_, index) => {
      return index < array.length - 1;
    });
  };

  const handleVote = (item, vote) => {
    let newStack = pop(stack);
    setStack(newStack);
    onVote(item, vote);
  };

  return (
    <div className="mx-auto my-5 h-2/3 xl:w-4/12 lg:w-5/12 md:w-6/12 w-11/12 flex justify-center relative" {...props}>
      {stack.map((item, index) => {
        let isTop = index === stack.length - 1;
        return (
          <Card
            drag={isTop}
            key={item.key || index}
            onVote={(result) => handleVote(item, result)}
          >
            {item}
          </Card>
        );
      })}
    </div>
  );
};

export const Card = ({ children, style, onVote, id, ...props }) => {
  const cardElem = useRef(null);

  const x = useMotionValue(0);
  const controls = useAnimation();

  const [constrained, setConstrained] = useState(true);

  const [direction, setDirection] = useState();

  const [velocity, setVelocity] = useState();

  const getVote = (childNode, parentNode) => {
    const childRect = childNode.getBoundingClientRect();
    const parentRect = parentNode.getBoundingClientRect();
    let result =
      parentRect.left >= childRect.right
        ? false
        : parentRect.right <= childRect.left
        ? true
        : undefined;
    return result;
  };

  const getDirection = () => {
    return velocity >= 1 ? "right" : velocity <= -1 ? "left" : undefined;
  };

  const getTrajectory = () => {
    setVelocity(x.getVelocity());
    setDirection(getDirection());
  };

  const flyAway = (min) => {
    const flyAwayDistance = (direction) => {
      const parentWidth =
        cardElem.current.parentNode.getBoundingClientRect().width;
      const childWidth = cardElem.current.getBoundingClientRect().width;
      return direction === "left"
        ? -parentWidth / 2 - childWidth / 2
        : parentWidth / 2 + childWidth / 2;
    };

    if (direction && Math.abs(velocity) > min) {
      setConstrained(false);
      controls.start({
        x: flyAwayDistance(direction),
      });
    }
  };

  useEffect(() => {
    const unsubscribeX = x.onChange(() => {
      const childNode = cardElem.current;
      const parentNode = cardElem.current.parentNode;
      const result = getVote(childNode, parentNode);
      result !== undefined && onVote(result);
    });

    return () => unsubscribeX();
  });

  return (
    <motion.div
      className="absolute flex h-full w-full"
      animate={controls}
      dragConstraints={constrained && { left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={1}
      ref={cardElem}
      style={{ x }}
      onDrag={getTrajectory}
      onDragEnd={() => flyAway(10)}
      whileTap={{ scale: 1.1 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default function Deck({ possibleMatches }) {
  return (
    <Stack onVote={(item, vote) => console.log(item.props, vote)}>
      {possibleMatches.map((user) => {
        return (
          <div
            className="bg-white flex align-middle justify-center text-2xl shadow-2xl rounded-2xl overflow-hidden"
          >
            <Image src={user.images[0]} className="no-drag" width="1000" height="100" />
            <div className="absolute bottom-5 left-5 p-1 text-main-1 font-bold">
              <h1 className="text-4xl">
                {user.firstName} {user.lastName}
              </h1>
              <h1 className="text-2xl">{user.age}</h1>
              <h1 className="text-2xl text-main-2">{user.house}</h1>
            </div>
            <div className="absolute left-1">
            {user.interests.films.map((interest) =>
            {
                return (
                    <div>
                        <div className="bg-main-3-transparent my-1 p-1">
                          <p className="text-white">{interest}</p>
                        </div>
                    </div>
                )
            }
            )}
            {user.interests.games.map((interest) =>
            {
              console.log(interest)
                return (
                    <div>
                        <div className="bg-main-2 my-1 p-1">
                          <p className="text-white">{interest}</p>
                        </div>
                    </div>
                )
            }
            )}
            </div>
          </div>
        );
      })}
    </Stack>
  );
}
