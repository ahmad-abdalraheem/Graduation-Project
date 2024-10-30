import bcrypt


def hash_string(input_string: str) -> str:
    """
    Hashes a given input string (e.g., password) using bcrypt with an automatically generated salt.
    Returns the hashed password as a string.
    """
    salt = bcrypt.gensalt()  
    hashed = bcrypt.hashpw(input_string.encode('utf-8'), salt)

    return hashed.decode('utf-8')


def verify_password(plain_password: str, hashed_password: str) -> bool:
    """
    Verifies a plain-text password against the stored bcrypt hash.
    Returns True if the password matches, False otherwise.
    """
    return bcrypt.checkpw(plain_password.encode('utf-8'), hashed_password.encode('utf-8'))