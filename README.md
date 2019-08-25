# README
## usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, unique: true|
|email|integer|null: false, unique: true|

### Association
- has_many :groups, through: :groups_users
- has_many :messages


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|integer|null: false, unique: true|

### Association
has_many :users, through: :groups_users
has_many :messages


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|message|string|
|image|string|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user