If we go to localhost:3000

state.boards []

we dispatch action FETCH_BOARDS_SUCCESS

we get all boards from server

set the state to action.boards so now state = [{id: 1, title: "New Board"}, board2, board3]

---

If we go to localhost:3000/api/boards/1

state = []

sending request to server []

only when you receive response you dispatch FETCH_BOARD_SUCCESS and after that state = [{id:1 , title: "New Board"}]

we dispatch action FETCH_BOARD_SUCCESS

we get board with id 1 from server

board1 = {id:1 , title: "New Board", lists: [{id:1, title: "new list", cards: [{}]}, {id:2, title: "new list2", cards: [{}]} ]

in FETCH_BOARD SUCCESS you remove all lists from board1 -> board1 = {id:1 , title: "New Board"}

add this object to state = [{id:1 , title: "New Board"}]

Lists reducer

/boards/1 2 lists board2, list3
[list1, list2, list3, list1, list2, list1, list2, list1, list2]

state = [list3, list1, list2]
