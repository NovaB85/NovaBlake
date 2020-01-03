class Blog < ApplicationRecord
  before_validation :set_default_date, on: :create
  validates_presence_of :title, :body, :date

  private

  def set_default_date
    self.date ||= Date.today
  end
end
