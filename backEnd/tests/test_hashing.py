import pytest
from ..security.hashing import hash_string, verify_password

def test_hash_string():
    input_string = "password123"
    hashed_string = hash_string(input_string)
    
    assert isinstance(hashed_string, str)
    assert hashed_string.startswith("$2b$")

def test_verify_password():
    input_string = "password123"
    hashed_string = hash_string(input_string)
    
    assert verify_password(input_string, hashed_string) == True
    assert verify_password("wrongpassword", hashed_string) == False

def test_verify_password_invalid_hash():
    input_string = "password123"
    invalid_hashed_string = "invalidhash"
    
    assert verify_password(input_string, invalid_hashed_string) == False

def test_hash_string_empty():
    input_string = ""
    hashed_string = hash_string(input_string)
    
    assert isinstance(hashed_string, str)
    assert hashed_string.startswith("$2b$")

def test_verify_password_empty():
    input_string = ""
    hashed_string = hash_string(input_string)
    
    assert verify_password(input_string, hashed_string) == True
    assert verify_password("wrongpassword", hashed_string) == False

def test_verify_password_none():
    input_string = None
    hashed_string = hash_string("password123")
    
    assert verify_password(input_string, hashed_string) == False