import time
from numba import jit

def get_primes(limit):
    """Get all prime numbers up to the limit (without Numba)."""
    primes = []
    for num in range(2, limit + 1):
        is_prime = True
        for i in range(2, int(num**0.5) + 1):
            if num % i == 0:
                is_prime = False
                break
        if is_prime:
            primes.append(num)
    return primes

@jit(nopython=True)
def get_primes_numba(limit):
    """Get all prime numbers up to the limit (with Numba)."""
    primes = []
    for num in range(2, limit + 1):
        is_prime = True
        for i in range(2, int(num**0.5) + 1):
            if num % i == 0:
                is_prime = False
                break
        if is_prime:
            primes.append(num)
    return primes

if __name__ == "__main__":
    limit = 1000000
    
    # Warm up Numba (first run includes compilation time)
    _ = get_primes_numba(100)
    
    # Time the standard implementation
    start = time.time()
    standard_primes = get_primes(limit)
    standard_time = time.time() - start
    
    # Time the Numba implementation
    start = time.time()
    numba_primes = get_primes_numba(limit)
    numba_time = time.time() - start
    
    print(f"Finding primes up to {limit}:")
    print(f"Standard implementation: {standard_time:.4f} seconds")
    print(f"Numba JIT implementation: {numba_time:.4f} seconds")
    print(f"Speedup: {standard_time/numba_time:.2f}x")
    print(f"Found {len(standard_primes)} prime numbers")