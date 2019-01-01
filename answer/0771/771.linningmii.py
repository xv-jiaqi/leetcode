class Solution:
    def numJewelsInStones(self, J, S):
        """
        :type J: str
        :type S: str
        :rtype: int
        """

        d_dict = {}
        counter = 0

        for i in range(len(J)):
            d_dict[J[i]] = True

        for j in range(len(S)):
            if d_dict.get(S[j]):
                counter += 1

        return counter
