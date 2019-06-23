class Solution:
    def isValid(self, s: str) -> bool:
        stack = []

        pair = {
          ')': '(',
          ']': '[',
          '}': '{'
        }

        for char in s:
          # 栈为空时右括号先入必然不配对
          if len(stack) == 0:
            if pair.get(char) is not None:
              return False

          # 栈不为空时右括号进入
          if pair.get(char) is not None:
            if stack[0] == pair[char]:
              stack.pop(0)
            else:
              return False
          else:
            # 左括号不做判断, 直接入栈
            stack.insert(0, char)


        # 遍历完毕后栈为空说明有效
        return len(stack) == 0

            
s = Solution()
print(s.isValid("{[]}"))  # True