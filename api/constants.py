import os

is_lambda_env = "AWS_LAMBDA_FUNCTION_NAME" in os.environ
SQLITE_FILENAME = os.environ["DB_NAME"]

DATABASE_URL = f"sqlite:///database/{SQLITE_FILENAME}"
if is_lambda_env:
    DATABASE_URL = f"sqlite:///api/database/{SQLITE_FILENAME}"

DOTENV_BASE = os.path.dirname(os.path.dirname(__file__))
DOTENV_FILE = os.path.join(os.path.dirname(os.path.dirname(__file__)), ".env")
