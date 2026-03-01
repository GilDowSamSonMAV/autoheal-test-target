"""
This file intentionally contains a failing test for AutoHeal testing
"""

def test_addition():
    """Test that should fail"""
    result = 2 + 2
    assert result == 5, "Math is broken!"  # Intentionally wrong assertion

def test_string_operations():
    """Another failing test"""
    text = "Hello World"
    assert len(text) == 20, "String length mismatch"  # Intentionally wrong

def test_list_operations():
    """Yet another failing test"""
    numbers = [1, 2, 3, 4, 5]
    assert sum(numbers) == 20, "Sum calculation failed"  # Intentionally wrong
