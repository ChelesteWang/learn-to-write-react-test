import { Counter } from "./components/Counter";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("测试点击到最多次数后需要重置", () => {
  render(<Counter maxClicks={4} initialCount={3} />);
  const counterButton = screen.getByText(/^count/i);

  // 测试计数器是否成功初始化
  expect(counterButton).toHaveTextContent("3");

  // 按钮点击一次计数器 + 1
  userEvent.click(counterButton);
  expect(counterButton).toHaveTextContent("4");

  // 达到最高点击次数，按钮应该被禁用
  expect(counterButton).toHaveAttribute("disabled");
  // 点击按钮应该不会触发事件
  userEvent.click(counterButton);
  expect(counterButton).toHaveTextContent("4");

  // 点击重置按钮，计数器应该重置
  userEvent.click(screen.getByText(/reset/i));

  // 测试计数器是否成功重置为初始状态
  expect(counterButton).toHaveTextContent("3");

  // 测试计数器是否可以继续点击
  userEvent.click(counterButton);
  expect(counterButton).toHaveTextContent("4");
});
