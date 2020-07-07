class SessionsController < Devise::SessionsController
  def create
    self.resource = warden.authenticate!(auth_options)
    sign_in(resource_name, resource)
    render json: { token: current_token }.to_json
  end

  def show
    return unless user_signed_in?

    render json: { 
      user: {
        id:    current_user.id,
        email: current_user.email
      } 
    }.to_json
  end

  private

  def current_token
    request.env['warden-jwt_auth.token']
  end

  def respond_with(resource, _opts = {})
    render json: resource
  end

  def respond_to_on_destroy
    head :ok
  end
end
