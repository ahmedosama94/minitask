class CreateVotes < ActiveRecord::Migration[6.0]
  def change
    create_table :votes do |t|
      t.string :city
      t.integer :votes

      t.timestamps
    end

    add_reference :votes, :color, foreign_key: true
  end
end
