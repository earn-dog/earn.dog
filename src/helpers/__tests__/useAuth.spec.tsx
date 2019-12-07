import { FC, createElement, Fragment } from "react";
import { render } from "@testing-library/react";
import { useAuth } from "../useAuth";

const WrapHook: FC<{ hook: Function }> = ({ hook }) => {
  const result = hook();

  return createElement(Fragment, {
    children: result
  });
};

it("should do something please work", () => {
  const { container } = render(
    createElement(WrapHook, {
      hook: useAuth
    })
  );

  console.log(container.innerHTML);
});
