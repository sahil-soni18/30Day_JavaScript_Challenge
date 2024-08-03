
 // Activity 1: Add Two Numbers

// Definition for singly-linked list.
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function addTwoNumbers(l1, l2) {
  let dummyHead = new ListNode(0);
  let p = l1, q = l2, current = dummyHead;
  let carry = 0;
  while (p !== null || q !== null) {
    let x = (p !== null) ? p.val : 0;
    let y = (q !== null) ? q.val : 0;
    let sum = carry + x + y;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
    if (p !== null) p = p.next;
    if (q !== null) q = q.next;
  }
  if (carry > 0) {
    current.next = new ListNode(carry);
  }
  return dummyHead.next;
}

// Test cases
let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
console.log(addTwoNumbers(l1, l2)); // Output: 7 -> 0 -> 8


 // Activity 2: Longest Substring Without Repeating Characters

function lengthOfLongestSubstring(s) {
  let n = s.length;
  let set = new Set();
  let ans = 0, i = 0, j = 0;
  while (i < n && j < n) {
    if (!set.has(s[j])) {
      set.add(s[j++]);
      ans = Math.max(ans, j - i);
    } else {
      set.delete(s[i++]);
    }
  }
  return ans;
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); 
console.log(lengthOfLongestSubstring("bbbbb")); 
console.log(lengthOfLongestSubstring("pwwkew")); 


 // Activity 3: Container With Most Water

function maxArea(height) {
  let maxarea = 0, l = 0, r = height.length - 1;
  while (l < r) {
    let area = Math.min(height[l], height[r]) * (r - l);
    maxarea = Math.max(maxarea, area);
    if (height[l] < height[r]) l++;
    else r--;
  }
  return maxarea;
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7]));


 // Activity 4: 3Sum

function threeSum(nums) {
  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      let lo = i + 1, hi = nums.length - 1, sum = 0 - nums[i];
      while (lo < hi) {
        if (nums[lo] + nums[hi] === sum) {
          res.push([nums[i], nums[lo], nums[hi]]);
          while (lo < hi && nums[lo] === nums[lo + 1]) lo++;
          while (lo < hi && nums[hi] === nums[hi - 1]) hi--;
          lo++; hi--;
        } else if (nums[lo] + nums[hi] < sum) lo++;
        else hi--;
      }
    }
  }
  return res;
}

// Test cases
console.log(threeSum([-1, 0, 1, 2, -1, -4])); 


 // Activity 5: Group Anagrams

function groupAnagrams(strs) {
  let map = new Map();
  for (let str of strs) {
    let sorted = str.split('').sort().join('');
    if (!map.has(sorted)) {
      map.set(sorted, []);
    }
    map.get(sorted).push(str);
  }
  return Array.from(map.values());
}

// Test cases
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); 


