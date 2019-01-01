class Solution:
    def __init__(self):
        self.grid = []

    def islandPerimeter(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """

        self.grid = grid
        edge_count = 0

        for y in range(len(grid)):
            for x in range(len(grid[y])):
                edge_count += self.count_edge([x, y])

        return edge_count

    def count_edge(self, coord):
        """
        :type coord: [int, int]
        :rtype: int
        """

        x = coord[0]
        y = coord[1]

        if self.grid[y][x] == 0:
            return 0
        else:
            edge_count = 4

            if x - 1 >= 0 and self.grid[y][x - 1] == 1:
                    edge_count -= 1

            if x + 1 < len(self.grid[y]) and self.grid[y][x + 1] == 1:
                edge_count -= 1

            if y - 1 >= 0 and self.grid[y - 1][x] == 1:
                edge_count -= 1

            if y + 1 < len(self.grid) and self.grid[y + 1][x] == 1:
                edge_count -= 1

            return edge_count


solution = Solution()
print(solution.islandPerimeter(
    [
        [0, 1, 0, 0],
        [1, 1, 1, 0],
        [0, 1, 0, 0],
        [1, 1, 0, 0]
    ]
))
