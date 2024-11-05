import bcrypt

def hash_string(input_string: str) -> str:
    """
    Hashes a given input string (e.g., password) using bcrypt with an automatically generated salt.

    Args:
        input_string (str): The plain text string to be hashed.

    Returns:
        str: The hashed string in UTF-8 format, or None if an error occurs.
    """
    salt = bcrypt.gensalt()  
    hashed = bcrypt.hashpw(input_string.encode('utf-8'), salt)
    return hashed.decode('utf-8')



def verify_password(plain_password: str, hashed_password: str) -> bool:
    """
    Verifies a plain-text password against the stored bcrypt hash.

    Args:
        plain_password (str): The plain-text password to be verified.
        hashed_password (str): The bcrypt hashed password to check against.

    Returns:
        bool: True if the password matches, False otherwise. Returns False if any error occurs.
    """
    try:
        if not hashed_password.startswith("$2b$"):
            raise ValueError("Hashed password is not in valid bcrypt format.")

        return bcrypt.checkpw(plain_password.encode('utf-8'), hashed_password.encode('utf-8'))
    except (ValueError, TypeError) as e:
        #print(f"Error in verification process: {e}")
        return False
    except bcrypt.error as e:
        #print(f"bcrypt error occurred: {e}")
        return False