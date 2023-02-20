export interface LoginResult {
  // public bool Successful { get; set; }
  // public string Error { get; set; }
  // public string Token { get; set; }
  // public string Email { get; set; }

  successful: boolean;
  error: string;
  token: string;
  email: string;
}
