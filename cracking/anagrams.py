from collections import Counter

def num_anagram_steps(a, b):
    c_a = Counter(a)
    c_b = Counter(b)
    c_counter = c_a + c_b
    uniq_chars_a = set(c_a)
    uniq_chars_b = set(c_b)

    diff = sum(c_counter[w] for w in (uniq_chars_a ^ uniq_chars_b))
    similar = sum(abs(c_a[w] - c_b[w]) for w in (uniq_chars_a & uniq_chars_b))
    return diff + similar

a = input().strip()
b = input().strip()

print(num_anagram_steps(a, b))
