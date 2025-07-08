"use client"

import { useState, useEffect } from "react"
import styles from "./DSAPreparationSheet.module.css"
import { ChevronDown, ChevronRight, ExternalLink, BookOpen, Target, Clock, Users } from "lucide-react"

const sections = [
  {
    title: "STACKS & QUEUES",
    description: "Monotonic Stack, Deques, Design",
    problems: [
      {
        title: "Next Greater Element I",
        description: "Find the next greater element for each element in the first array within the second array.",
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/next-greater-element-i/", problemNumber: "496" },
        ],
      },
      {
        title: "Next Greater Element II",
        description: "Find the next greater element for each element in a circular array.",
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/next-greater-element-ii/", problemNumber: "503" },
        ],
      },
      {
        title: "Daily Temperatures",
        description: "Given daily temperatures, find how many days you have to wait for a warmer temperature.",
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/daily-temperatures/", problemNumber: "739" },
        ],
      },
      {
        title: "Stock Span Problem",
        description: "Calculate the span of stock prices for all days.",
        links: [
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/the-stock-span-problem/" },
          { platform: "LeetCode", url: "https://leetcode.com/problems/online-stock-span/", problemNumber: "901" },
        ],
      },
      {
        title: "Valid Parentheses",
        description: "Determine if a string of parentheses is valid.",
        links: [{ platform: "LeetCode", url: "https://leetcode.com/problems/valid-parentheses/", problemNumber: "20" }],
      },
      {
        title: "Largest Rectangle in Histogram",
        description: "Find the largest rectangle area in a histogram.",
        links: [
          {
            platform: "LeetCode",
            url: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
            problemNumber: "84",
          },
        ],
      },
      {
        title: "Max Rectangle in Binary Matrix",
        description: "Find the maximal rectangle containing only 1s in a binary matrix.",
        links: [{ platform: "LeetCode", url: "https://leetcode.com/problems/maximal-rectangle/", problemNumber: "85" }],
      },
      {
        title: "Sliding Window Maximum",
        description: "Find the maximum element in each sliding window of size k.",
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/sliding-window-maximum/", problemNumber: "239" },
        ],
      },
      {
        title: "Implement Stack using Queues",
        description: "Implement a stack using queue operations.",
        links: [
          {
            platform: "LeetCode",
            url: "https://leetcode.com/problems/implement-stack-using-queues/",
            problemNumber: "225",
          },
        ],
      },
      {
        title: "LRU Cache (Design)",
        description: "Design and implement a Least Recently Used (LRU) cache.",
        links: [{ platform: "LeetCode", url: "https://leetcode.com/problems/lru-cache/", problemNumber: "146" }],
      },
    ],
  },
  {
    title: "DYNAMIC PROGRAMMING",
    description: "Easy–Medium Only",
    problems: [
      {
        title: "Fibonacci (Memoization + Tabulation)",
        description: "Calculate the nth Fibonacci number using DP.",
        links: [{ platform: "LeetCode", url: "https://leetcode.com/problems/fibonacci-number/", problemNumber: "509" }],
      },
      {
        title: "Climbing Stairs",
        description: "Count distinct ways to climb n stairs (1 or 2 steps at a time).",
        links: [{ platform: "LeetCode", url: "https://leetcode.com/problems/climbing-stairs/", problemNumber: "70" }],
      },
      {
        title: "House Robber",
        description: "Rob houses to maximize money without robbing adjacent houses.",
        links: [{ platform: "LeetCode", url: "https://leetcode.com/problems/house-robber/", problemNumber: "198" }],
      },
      {
        title: "House Robber II",
        description: "Rob houses arranged in a circle.",
        links: [{ platform: "LeetCode", url: "https://leetcode.com/problems/house-robber-ii/", problemNumber: "213" }],
      },
      {
        title: "0/1 Knapsack",
        description: "Select items with maximum value within weight capacity.",
        links: [
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/" },
          {
            platform: "LeetCode",
            url: "https://leetcode.com/problems/partition-equal-subset-sum/",
            problemNumber: "416",
          },
        ],
      },
      {
        title: "Subset Sum",
        description: "Check if there's a subset with a given sum.",
        links: [
          {
            platform: "LeetCode",
            url: "https://leetcode.com/problems/partition-equal-subset-sum/",
            problemNumber: "416",
          },
        ],
      },
      {
        title: "Partition Equal Subset Sum",
        description: "Check if array can be partitioned into two equal sum subsets.",
        links: [
          {
            platform: "LeetCode",
            url: "https://leetcode.com/problems/partition-equal-subset-sum/",
            problemNumber: "416",
          },
        ],
      },
      {
        title: "Coin Change (Min)",
        description: "Find minimum coins needed to make a given amount.",
        links: [{ platform: "LeetCode", url: "https://leetcode.com/problems/coin-change/", problemNumber: "322" }],
      },
      {
        title: "Coin Change (Total Ways)",
        description: "Count total ways to make a given amount using coins.",
        links: [{ platform: "LeetCode", url: "https://leetcode.com/problems/coin-change-2/", problemNumber: "518" }],
      },
      {
        title: "Longest Common Subsequence",
        description: "Find length of longest common subsequence between two strings.",
        links: [
          {
            platform: "LeetCode",
            url: "https://leetcode.com/problems/longest-common-subsequence/",
            problemNumber: "1143",
          },
        ],
      },
      {
        title: "Longest Palindromic Subsequence",
        description: "Find length of longest palindromic subsequence in a string.",
        links: [
          {
            platform: "LeetCode",
            url: "https://leetcode.com/problems/longest-palindromic-subsequence/",
            problemNumber: "516",
          },
        ],
      },
      {
        title: "Edit Distance",
        description: "Find minimum operations to convert one string to another.",
        links: [{ platform: "LeetCode", url: "https://leetcode.com/problems/edit-distance/", problemNumber: "72" }],
      },
      {
        title: "Decode Ways",
        description: "Count ways to decode a numeric string to letters.",
        links: [{ platform: "LeetCode", url: "https://leetcode.com/problems/decode-ways/", problemNumber: "91" }],
      },
    ],
  },
  {
    title: "GRAPHS",
    description: "BFS, DFS, DSU, Shortest Path",
    problems: [
      {
        title: "Number of Islands",
        description: "Count number of islands in a 2D grid.",
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/number-of-islands/", problemNumber: "200" },
        ],
      },
      {
        title: "Flood Fill",
        description: "Fill connected pixels with a new color.",
        links: [{ platform: "LeetCode", url: "https://leetcode.com/problems/flood-fill/", problemNumber: "733" }],
      },
      {
        title: "Detect Cycle in Undirected Graph",
        description: "Check if an undirected graph contains a cycle.",
        links: [{ platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/detect-cycle-undirected-graph/" }],
      },
      {
        title: "Detect Cycle in Directed Graph",
        description: "Check if a directed graph contains a cycle.",
        links: [
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/detect-cycle-in-a-graph/" },
          { platform: "LeetCode", url: "https://leetcode.com/problems/course-schedule/", problemNumber: "207" },
        ],
      },
      {
        title: "Topological Sort (Kahn's Algorithm)",
        description: "Find topological ordering of vertices in a DAG.",
        links: [
          {
            platform: "GeeksforGeeks",
            url: "https://www.geeksforgeeks.org/topological-sorting-indegree-based-solution/",
          },
        ],
      },
      {
        title: "Course Schedule I",
        description: "Check if all courses can be finished given prerequisites.",
        links: [{ platform: "LeetCode", url: "https://leetcode.com/problems/course-schedule/", problemNumber: "207" }],
      },
      {
        title: "Course Schedule II",
        description: "Find order of courses to finish all given prerequisites.",
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/course-schedule-ii/", problemNumber: "210" },
        ],
      },
      {
        title: "Rotten Oranges",
        description: "Find minimum time to rot all oranges.",
        links: [{ platform: "LeetCode", url: "https://leetcode.com/problems/rotting-oranges/", problemNumber: "994" }],
      },
      {
        title: "Shortest Path in Binary Maze",
        description: "Find shortest path from source to destination in binary maze.",
        links: [{ platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/shortest-path-binary-maze/" }],
      },
      {
        title: "Dijkstra's Algorithm",
        description: "Find shortest path from source to all vertices.",
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/network-delay-time/", problemNumber: "743" },
          {
            platform: "GeeksforGeeks",
            url: "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/",
          },
        ],
      },
      {
        title: "Union-Find (Disjoint Set Union)",
        description: "Implement Union-Find data structure.",
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/number-of-provinces/", problemNumber: "547" },
        ],
      },
      {
        title: "Kruskal's Algorithm",
        description: "Find minimum spanning tree using Kruskal's algorithm.",
        links: [
          {
            platform: "GeeksforGeeks",
            url: "https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/",
          },
        ],
      },
    ],
  },
  {
    title: "TREES & BINARY TREES",
    description: "Tree Traversals, Properties, and Operations",
    problems: [
      {
        title: "Inorder Traversal",
        description: "Traverse binary tree in inorder.",
        links: [
          {
            platform: "LeetCode",
            url: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
            problemNumber: "94",
          },
        ],
      },
      {
        title: "Preorder Traversal",
        description: "Traverse binary tree in preorder.",
        links: [
          {
            platform: "LeetCode",
            url: "https://leetcode.com/problems/binary-tree-preorder-traversal/",
            problemNumber: "144",
          },
        ],
      },
      {
        title: "Postorder Traversal",
        description: "Traverse binary tree in postorder.",
        links: [
          {
            platform: "LeetCode",
            url: "https://leetcode.com/problems/binary-tree-postorder-traversal/",
            problemNumber: "145",
          },
        ],
      },
      {
        title: "Level Order Traversal",
        description: "Traverse binary tree level by level.",
        links: [
          {
            platform: "LeetCode",
            url: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
            problemNumber: "102",
          },
        ],
      },
      {
        title: "Diameter of Binary Tree",
        description: "Find diameter (longest path between any two nodes) of binary tree.",
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/diameter-of-binary-tree/", problemNumber: "543" },
        ],
      },
      {
        title: "Check Balanced Binary Tree",
        description: "Check if binary tree is height-balanced.",
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/balanced-binary-tree/", problemNumber: "110" },
        ],
      },
      {
        title: "Lowest Common Ancestor (LCA)",
        description: "Find lowest common ancestor of two nodes in binary tree.",
        links: [
          {
            platform: "LeetCode",
            url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
            problemNumber: "236",
          },
        ],
      },
      {
        title: "Max Path Sum in Binary Tree",
        description: "Find maximum path sum in binary tree.",
        links: [
          {
            platform: "LeetCode",
            url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
            problemNumber: "124",
          },
        ],
      },
      {
        title: "Symmetric Tree",
        description: "Check if binary tree is symmetric.",
        links: [{ platform: "LeetCode", url: "https://leetcode.com/problems/symmetric-tree/", problemNumber: "101" }],
      },
      {
        title: "Same Tree",
        description: "Check if two binary trees are the same.",
        links: [{ platform: "LeetCode", url: "https://leetcode.com/problems/same-tree/", problemNumber: "100" }],
      },
      {
        title: "Serialize and Deserialize Binary Tree",
        description: "Serialize and deserialize a binary tree.",
        links: [
          {
            platform: "LeetCode",
            url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
            problemNumber: "297",
          },
        ],
      },
      {
        title: "Convert Sorted Array to BST",
        description: "Convert sorted array to balanced BST.",
        links: [
          {
            platform: "LeetCode",
            url: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
            problemNumber: "108",
          },
        ],
      },
    ],
  },
  {
    title: "BINARY SEARCH + BINARY SEARCH ON ANSWER",
    description: "Search Algorithms and Optimization Problems",
    problems: [
      {
        title: "Binary Search (Basic)",
        description: "Implement basic binary search.",
        links: [{ platform: "LeetCode", url: "https://leetcode.com/problems/binary-search/", problemNumber: "704" }],
      },
      {
        title: "First and Last Position of Element in Sorted Array",
        description: "Find first and last position of target in sorted array.",
        links: [
          {
            platform: "LeetCode",
            url: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
            problemNumber: "34",
          },
        ],
      },
      {
        title: "Search in Rotated Sorted Array",
        description: "Search for target in rotated sorted array.",
        links: [
          {
            platform: "LeetCode",
            url: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
            problemNumber: "33",
          },
        ],
      },
      {
        title: "Aggressive Cows",
        description: "Place cows in stalls to maximize minimum distance.",
        links: [
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/aggressive-cows-problem/" },
          { platform: "SPOJ", url: "https://www.spoj.com/problems/AGGRCOW/" },
        ],
      },
      {
        title: "Book Allocation",
        description: "Allocate books to students to minimize maximum pages.",
        links: [{ platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/allocate-minimum-number-pages/" }],
      },
      {
        title: "Painters Partition Problem",
        description: "Partition boards among painters to minimize time.",
        links: [{ platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/painters-partition-problem/" }],
      },
      {
        title: "Capacity to Ship Packages",
        description: "Find minimum ship capacity to ship packages within days.",
        links: [
          {
            platform: "LeetCode",
            url: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/",
            problemNumber: "1011",
          },
        ],
      },
      {
        title: "Split Array Largest Sum",
        description: "Split array into m subarrays to minimize largest sum.",
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/split-array-largest-sum/", problemNumber: "410" },
        ],
      },
    ],
  },
  {
    title: "SLIDING WINDOW & TWO POINTERS",
    description: "Efficient Array and String Processing Techniques",
    problems: [
      {
        title: "Maximum Sum Subarray of Size K",
        description: "Find maximum sum of subarray of size k.",
        links: [
          { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/find-maximum-minimum-sum-subarray-size-k/" },
          {
            platform: "LeetCode",
            url: "https://leetcode.com/problems/maximum-average-subarray-i/",
            problemNumber: "643",
          },
        ],
      },
      {
        title: "Longest Substring Without Repeating Characters",
        description: "Find length of longest substring without repeating characters.",
        links: [
          {
            platform: "LeetCode",
            url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
            problemNumber: "3",
          },
        ],
      },
      {
        title: "Minimum Window Substring",
        description: "Find minimum window substring containing all characters of another string.",
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/minimum-window-substring/", problemNumber: "76" },
        ],
      },
      {
        title: "Permutation in String",
        description: "Check if one string contains permutation of another.",
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/permutation-in-string/", problemNumber: "567" },
        ],
      },
      {
        title: "Find All Anagrams in a String",
        description: "Find all anagrams of a pattern in a string.",
        links: [
          {
            platform: "LeetCode",
            url: "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
            problemNumber: "438",
          },
        ],
      },
      {
        title: "Container With Most Water",
        description: "Find two lines that form container with most water.",
        links: [
          {
            platform: "LeetCode",
            url: "https://leetcode.com/problems/container-with-most-water/",
            problemNumber: "11",
          },
        ],
      },
      {
        title: "Trapping Rain Water",
        description: "Calculate trapped rainwater between bars.",
        links: [
          { platform: "LeetCode", url: "https://leetcode.com/problems/trapping-rain-water/", problemNumber: "42" },
        ],
      },
      {
        title: "Remove Duplicates from Sorted Array",
        description: "Remove duplicates from sorted array in-place.",
        links: [
          {
            platform: "LeetCode",
            url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
            problemNumber: "26",
          },
        ],
      },
      {
        title: "2Sum",
        description: "Find two numbers that add up to target.",
        links: [{ platform: "LeetCode", url: "https://leetcode.com/problems/two-sum/", problemNumber: "1" }],
      },
      {
        title: "3Sum",
        description: "Find all unique triplets that sum to zero.",
        links: [{ platform: "LeetCode", url: "https://leetcode.com/problems/3sum/", problemNumber: "15" }],
      },
      {
        title: "4Sum",
        description: "Find all unique quadruplets that sum to target.",
        links: [{ platform: "LeetCode", url: "https://leetcode.com/problems/4sum/", problemNumber: "18" }],
      },
    ],
  },
]

const studyTips = [
  {
    title: "Preparation Strategy",
    icon: <Target className="w-5 h-5" />,
    tips: [
      "Start with Easy Problems: Build confidence with basic implementations",
      "Practice Patterns: Focus on understanding underlying patterns rather than memorizing solutions",
      "Time Management: Aim to solve Easy problems in 10-15 minutes, Medium in 20-30 minutes",
      "Mock Interviews: Practice explaining your approach clearly",
      "Edge Cases: Always consider edge cases and handle them appropriately",
    ],
  },
  {
    title: "Problem-Solving Approach",
    icon: <BookOpen className="w-5 h-5" />,
    tips: [
      "Understand the Problem: Read carefully and clarify requirements",
      "Think of Approach: Consider different algorithmic approaches",
      "Code Implementation: Write clean, readable code",
      "Test with Examples: Verify with given examples",
      "Analyze Complexity: Discuss time and space complexity",
    ],
  },
  {
    title: "Time Management",
    icon: <Clock className="w-5 h-5" />,
    tips: [
      "Practice regularly and consistently",
      "Don't skip the 'easy' problems - they build foundational skills",
      "Keep track of your progress and time taken for each problem",
      "Set daily/weekly goals for problem solving",
      "Review and revisit problems you found challenging",
    ],
  },
  {
    title: "Resources & Community",
    icon: <Users className="w-5 h-5" />,
    tips: [
      "LeetCode: Primary platform for practice",
      "GeeksforGeeks: Comprehensive explanations and theory",
      "YouTube: Visual explanations and walkthroughs",
      "GitHub: Sample solutions and implementations",
      "Join study groups or online communities for discussion",
    ],
  },
]

export default function DSAPreparationSheet() {
  const [expandedSections, setExpandedSections] = useState(new Set([0]))
  const [expandedTips, setExpandedTips] = useState(new Set())
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up or near top
        setIsHeaderVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past threshold
        setIsHeaderVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const toggleSection = (index) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedSections(newExpanded)
  }

  const toggleTip = (index) => {
    const newExpanded = new Set(expandedTips)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedTips(newExpanded)
  }

  return (
    <div className={styles.container}>
      <header className={`${styles.header} ${!isHeaderVisible ? styles.headerHidden : ""}`}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>SDE Intern DSA Preparation Sheet</h1>
          <p className={styles.subtitle}>Easy–Medium Level Problems for Technical Interviews</p>
        </div>
      </header>

      <nav className={styles.tableOfContents}>
        <h2>Table of Contents</h2>
        <ul>
          {sections.map((section, index) => (
            <li key={index}>
              <a href={`#section-${index}`} className={styles.tocLink}>
                {section.title}
              </a>
            </li>
          ))}
          <li>
            <a href="#study-tips" className={styles.tocLink}>
              STUDY TIPS
            </a>
          </li>
        </ul>
      </nav>

      <main className={styles.main}>
        {sections.map((section, sectionIndex) => (
          <section key={sectionIndex} id={`section-${sectionIndex}`} className={styles.section}>
            <div className={styles.sectionHeader} onClick={() => toggleSection(sectionIndex)}>
              <div>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
                <p className={styles.sectionDescription}>{section.description}</p>
              </div>
              {expandedSections.has(sectionIndex) ? (
                <ChevronDown className={styles.chevron} />
              ) : (
                <ChevronRight className={styles.chevron} />
              )}
            </div>

            {expandedSections.has(sectionIndex) && (
              <div className={styles.problemsGrid}>
                {section.problems.map((problem, problemIndex) => (
                  <div key={problemIndex} className={styles.problemCard}>
                    <h3 className={styles.problemTitle}>{problem.title}</h3>
                    <p className={styles.problemDescription}>{problem.description}</p>
                    <div className={styles.problemLinks}>
                      {problem.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.problemLink}
                        >
                          <span>{link.platform}</span>
                          {link.problemNumber && <span className={styles.problemNumber}>#{link.problemNumber}</span>}
                          <ExternalLink className={styles.externalIcon} />
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}

        <section id="study-tips" className={styles.section}>
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>STUDY TIPS</h2>
              <p className={styles.sectionDescription}>Essential strategies for effective preparation</p>
            </div>
          </div>

          <div className={styles.tipsGrid}>
            {studyTips.map((tipSection, index) => (
              <div key={index} className={styles.tipCard}>
                <div className={styles.tipHeader} onClick={() => toggleTip(index)}>
                  <div className={styles.tipTitleContainer}>
                    {tipSection.icon}
                    <h3 className={styles.tipTitle}>{tipSection.title}</h3>
                  </div>
                  {expandedTips.has(index) ? (
                    <ChevronDown className={styles.chevron} />
                  ) : (
                    <ChevronRight className={styles.chevron} />
                  )}
                </div>

                {expandedTips.has(index) && (
                  <ul className={styles.tipsList}>
                    {tipSection.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className={styles.tipItem}>
                        {tip}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <p>
              <strong>Note:</strong> Focus on understanding concepts rather than memorizing solutions. This sheet covers
              the most important DSA topics for SDE intern interviews.
            </p>
            <p className={styles.goodLuck}>Good luck with your preparation! 🚀</p>
          </div>
        </footer>
      </main>
    </div>
  )
}
