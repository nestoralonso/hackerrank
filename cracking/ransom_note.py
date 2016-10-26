from collections import Counter

def ransom_note(magazine, ransom):
    mag_counter = Counter(magazine)
    rans_counter = Counter(ransom)
    for w in rans_counter:
        if w not in mag_counter:
            return False
        if rans_counter[w] > mag_counter[w]:
            return False

    return True

m, n = map(int, input().strip().split(' '))
magazine = input().strip().split(' ')
ransom = input().strip().split(' ')

answer  = ransom_note(magazine, ransom)
if answer:
    print("Yes")
else:
    print("No")
