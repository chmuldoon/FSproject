require 'open-uri'
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
Like.destroy_all
# Follow.destroy_all
demo_user = User.create({username: "DemoUser", password: "DemoUser", email: "DemoUser@gmail.com", full_name: "Demo User"})
demo_profile_pic = open("https://active-storage-aa-fsp.s3-us-west-1.amazonaws.com/picsforfsp/icon.jpg")
demo_user.profilepic.attach(io: demo_profile_pic, filename: 'icon.jpg')

druillet = User.create({username: "druilletofficiel", password: "password", email: "druillet@druillet.com", full_name: "Philippe Druillet"})
profile_pic1 = open("https://active-storage-aa-fsp.s3-us-west-1.amazonaws.com/picsforfsp/druilletpfp.jpg")
druillet.profilepic.attach(io: profile_pic1, filename: 'druilletpfp.jpg')

frazetta = User.create({username: "ffrazetta", password: "password", email: "frank@frazetta.com", full_name: "Frank Frazetta"})
profile_pic2 = open("https://active-storage-aa-fsp.s3-us-west-1.amazonaws.com/picsforfsp/ob_3105fe_frank-frazetta-selfportraet.jpg")
frazetta.profilepic.attach(io: profile_pic2, filename: 'ob_3105fe_frank-frazetta-selfportraet.jpg')

jodorowsky = User.create({username: "aljodorowsky", password: "password", email: "al@jodorowsky.net", full_name: "Alejandro Jodorowsky"})
profile_pic3 = open("https://active-storage-aa-fsp.s3-us-west-1.amazonaws.com/picsforfsp/jodorowsky/alnye.jpg")
jodorowsky.profilepic.attach(io: profile_pic3, filename: 'alnye.jpg')


post1 = Post.create({author_id: druillet.id, caption: 'cherry coloured funk'})
post12 = Post.create({author_id: jodorowsky.id, caption: 'What could have been'})
post2 = Post.create({author_id: demo_user.id, caption: 'Corpus Hypercubus by Dali'})
post3 = Post.create({author_id: druillet.id, caption: 'Space Battles'})
post9 = Post.create({author_id: jodorowsky.id, caption: 'the big guy and I'})
post4 = Post.create({author_id: frazetta.id, caption: "Heroes don't get captured by goblins "})
post11 = Post.create({author_id: jodorowsky.id, caption: 'this is a film!'})
post5 = Post.create({author_id: druillet.id, caption: 'very warm'})
post10 = Post.create({author_id: jodorowsky.id, caption: "it's a lizard with a hat"})
post6 = Post.create({author_id: frazetta.id, caption: "Tarzan"})
post7 = Post.create({author_id: druillet.id, caption: 'Space'})
post8 = Post.create({author_id: frazetta.id, caption: 'Magic'})


file1 = open('https://active-storage-aa-fsp.s3-us-west-1.amazonaws.com/picsforfsp/druillet/1delirius.jpg')
post1.photo.attach(io: file1, filename: '1delirius.jpg')

file2 = open('https://active-storage-aa-fsp.s3-us-west-1.amazonaws.com/picsforfsp/dali/2231999052_83008c512a_b.jpg')
post2.photo.attach(io: file2, filename: '2231999052_83008c512a_b.jpg')

file3 = open('https://active-storage-aa-fsp.s3-us-west-1.amazonaws.com/picsforfsp/druillet/2vader.jpg')
post3.photo.attach(io: file3, filename: '2vader.jpg')

file4 = open('https://active-storage-aa-fsp.s3-us-west-1.amazonaws.com/picsforfsp/frazetta/4387518.jpg')
post4.photo.attach(io: file4, filename: '4387518.jpg')

file5 = open('https://active-storage-aa-fsp.s3-us-west-1.amazonaws.com/picsforfsp/druillet/3monster.jpg')
post5.photo.attach(io: file5, filename: '3monster.jpg')

file6 = open('https://active-storage-aa-fsp.s3-us-west-1.amazonaws.com/picsforfsp/frazetta/frankfrazetta.jpg')
post6.photo.attach(io: file6, filename: 'frankfrazetta.jpg')

file7 = open('https://active-storage-aa-fsp.s3-us-west-1.amazonaws.com/picsforfsp/druillet/4large.jpg')
post7.photo.attach(io: file7, filename: '4large.jpg')

file8 = open('https://active-storage-aa-fsp.s3-us-west-1.amazonaws.com/picsforfsp/frazetta/sorceror-cover-art-for-eerie-2_u-l-f7obrf0.jpg')
post8.photo.attach(io: file8, filename: 'sorceror-cover-art-for-eerie-2_u-l-f7obrf0.jpg')

file9 = open("https://active-storage-aa-fsp.s3-us-west-1.amazonaws.com/picsforfsp/jodorowsky/alnye.jpg")
post9.photo.attach(io: file9, filename: 'alnye.jpg')

file10 = open('https://active-storage-aa-fsp.s3-us-west-1.amazonaws.com/picsforfsp/jodorowsky/lizardwithat.png')
post10.photo.attach(io: file10, filename: 'lizardwithat.png')

file11 = open('https://active-storage-aa-fsp.s3-us-west-1.amazonaws.com/picsforfsp/jodorowsky/holymountain.jpg')
post11.photo.attach(io: file11, filename: 'holymountain.jpg')

file12 = open('https://active-storage-aa-fsp.s3-us-west-1.amazonaws.com/picsforfsp/jodorowsky/dune2.jpg')
post12.photo.attach(io: file12, filename: 'dune2.jpg')


Like.create({post_id: post1.id, user_id: demo_user.id})
Like.create({post_id: post2.id, user_id: demo_user.id})
Like.create({post_id: post3.id, user_id: demo_user.id})
Like.create({post_id: post4.id, user_id: druillet.id})
Like.create({post_id: post5.id, user_id: druillet.id})
Like.create({post_id: post1.id, user_id: frazetta.id})
Like.create({post_id: post8.id, user_id: demo_user.id})
Like.create({post_id: post7.id, user_id: frazetta.id})
Like.create({post_id: post6.id, user_id: demo_user.id})
Like.create({post_id: post5.id, user_id: frazetta.id})



