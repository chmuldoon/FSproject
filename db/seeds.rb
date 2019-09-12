# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all
# Comment.destroy_all
# Like.destroy_all
# Follow.destroy_all
demo_user = User.create({username: "DemoUser", password: "DemoUser", email: "DemoUser@gmail.com", full_name: "Demo User"})
post1 = Post.create({author_id: demo_user.id, caption: 'DemoCaption1'})
post2 = Post.create({author_id: demo_user.id, caption: 'DemoCaption2'})
post3 = Post.create({author_id: demo_user.id, caption: 'DemoCaption3'})
post4 = Post.create({author_id: demo_user.id, caption: 'DemoCaption4'})

