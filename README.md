# README
## usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, unique: true|
|email|integer|null: false, unique: true|


### Association
- has_many :groups
- has_many :messages
- has_many :members 


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|integer|null: false, unique: true|

### Association
has_many :users, through: :members
has_many :messages


## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|content|string|
|image|string|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user