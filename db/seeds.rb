5.times do 
  c = Category.create(
    name: Faker::TvShows::GameOfThrones.house,
  )

  10.times do
  c.cards.create(
    question: "Question?",
    points: 50,
    answer1: "answer1",
    answer2: "answer2",
    answer3: "answer3",
    answer4: "answer4",
    correct_answer: "B",
    answered: false,
  )
  end
end
puts "Data Seeded"