# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Board.destroy_all
List.destroy_all
Card.destroy_all

board = Board.create title: "First Board"

list = List.create title: "first_list", board_id: board.id
list2 = List.create title: "second_list", board_id: board.id

card1 = Card.create title: "first card", list: list, description: "some desc", labels: ["red", "yellow"]
card2 = Card.create title: "second card", list: list, description: "desc #2", labels: ["red", "purple"] 

card3 = Card.create title: "third card", list: list2, description: "third card???", labels: ["red", "purple"]
card4 = Card.create title: "fourth card", list: list2, description: "this is the 4th card", labels: ["red", "purple"]
card5 = Card.create title: "fifth card", list: list2, description: "FIFTH CaRd", labels: ["red", "purple"] 