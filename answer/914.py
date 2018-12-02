class Solution:
    # 求最大公约数
    def gcd(self, int1, int2):
        if int1 == int2 and int1 is not None:
            return int1

        if int1 > int2:
            bigger = int1
            smaller = int2
        else:
            bigger = int2
            smaller = int1

        if bigger % smaller == 0:
            return smaller

        return self.gcd(bigger, bigger % smaller)

    def hasGroupsSizeX(self, deck):
        """
        :type deck: List[int]
        :rtype: bool
        """

        deck_dict = {}

        for i in range(len(deck)):
            if deck_dict.get(deck[i]):
                deck_dict[deck[i]] += 1
            else:
                deck_dict[deck[i]] = 1

        dict_values_list = list(deck_dict.values())

        may_be_group_count = dict_values_list[0]
        for i in range(len(dict_values_list)):
            if i == 0:
                continue
            else:
                may_be_group_count = self.gcd(may_be_group_count, dict_values_list[i])

        if may_be_group_count == 1:
            return False

        for key in deck_dict.keys():
            if deck_dict[key] % may_be_group_count != 0:
                return False

        return True


s = Solution()
print(s.hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1]))
print(s.hasGroupsSizeX([0, 0, 0, 1, 1, 1, 2, 2, 2]))
print(s.hasGroupsSizeX([1]))
print(s.hasGroupsSizeX([1, 1, 1, 1, 2, 2, 2, 2, 2, 2]))
