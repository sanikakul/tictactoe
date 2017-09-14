class TicTacToe:

    def __init__(self):
        self.app_character = 0
        self.opponent_character = 1
        self.available_spots = [[False, False, False],
                                [False, False, False],
                                [False, False, False]]

    def set_app_character(self):
        self.app_character = 1
        self.opponent_character = 0

    def play_best_move(self):
        for i in range(0, len(self.available_spots)):
            for j in range(0, len(self.available_spots[i])):
                if not self.available_spots[i][j]:
                    self.available_spots[i][j] = self.app_character
                    return i, j
        return False

    def record_opponent_move(self, i, j):
        self.available_spots[i][j] = self.opponent_character
        return True
