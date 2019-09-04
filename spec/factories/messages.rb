FactoryBot.define do
  factory :message do
    content {Faker::Lorem.sentence}
    # image {File.open("#{Rails.root}/public/images/test_image.jpg")}
    image {File.open("#{Rails.root}/spec/fixtures/files/test.jpg")}

    user
    group
  end
end