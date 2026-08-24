export interface GeneralKnowledgeQuestion {
  id: string;
  category: string;
  points: number;
  questionText: string;
  options: string[];
  correctAnswer: string;
  answerImageUrl?: string;
  hint?: string;
}

export const generalKnowledgeBatch1: GeneralKnowledgeQuestion[] = [
  // ==========================================
  // --- أسئلة 200 نقطة (سهل) ---
  // ==========================================
  {
    id: "gen_b1_001",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي العملة الرسمية المستخدمة في الولايات المتحدة الأمريكية؟",
    options: ["الدولار", "اليورو", "الباوند", "الين"],
    correctAnswer: "الدولار",
    answerImageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCAFQAlMDASIAAhEBAxEB/8QAHAAAAQUBAQEAAAAAAAAAAAAABQADBAYHAgEI/8QASRAAAQMDAgMGBAMFBQUGBwEAAgADBAEFEgYiERMyFCExQlJiByNBchVRgjNhkqLRJHGBstIWNEORoQglU+Lw8jVEVGOxweHR/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAIBAwQFBv/EACsRAAICAgIBBAICAQUBAAAAAAACARIDEQQhMQUTIjJBQhRRUhUjM2Fxcv/aAAwDAQACEQMRAD8Aw62/C66yT/tLoM0/Km4lbrR8IbfGxdnuuyO/uAa4ir8zGAccALd48aKd2YtvESGhUyqRUXGbmPJ3E4SIA4GmYNqbGkWKDFPUFMS/iRIIzQ+A9/51op9WMeAU81MqFxS5Yju/TUhoqGaWNSpA3RsSawqX91RJNdhdfd4fT6IixBJ88aNfq4IuzajbDvpj++lUJ3I/QHasZYZEP8VE8NqZIcccS/zIxSKQ+Yv1Lx4BIcf/AMrT7RBBjWwOPGvl8tEWbtwFShUHqQwXzjO0A+kvCtESjSywxp4epJUNEjswtbduS4dAcV7Nz7NzQ6qeKjNSRcMd3VT81oVdfYRU2dctP4jyeldUDL2/vXJ7dtdwqaA0DQbiXRCkRCNO5c0cy83/AEVi4itpHWtq9ruJc/sxonG9xJ/aIVx5lrzLi8SRtsYnfNwxUxncHcqX8QrryuQzluOv5pXWsbHxNt9BCG72oRKm5PSYfNDDHJQ9Pf7uBZZdyPCQ5DwVX2gd+pM91DphqSBjUMhJYnrDQsi2Om/HEsfqNKL6huMbmbcR/wCSpWoLGD+fEe4qelU3nDNoEfFGeOz5cqJZYn5f3LxX7WOhyaeKREHp8aKhGJNmQGOJLqYs8ZI6ODn484Z7EvP70l6PirzLJZ/hvYK6j1XAimBEw2fNc/cA9/8A+l9ascG6dw4+WlP839Kx/wD7PGmuRa5V9dHfIPlM8fQP/mWzbBD1Fx+i6XHSsWMeduz0m8uBY4rNtVNPas1MFvCKEyC1XkOcQEuT6j9Svl4uX4dapMtzbgBYD7lTdBWFq41kXiQEMzKhAzLjP55CXUJCr7FJWr7oORbCAW3hfjyXMaARi6P3D5hWqMtharMHM3DEZHPjXyiKzNnS+q9DzTnRbexqGFnUgCp/OZHLy0UzUHxJtmoNN3KDFORbrsTePY5YYGXqS2FoV5nRNw+JN1mXYSCHCdPEKdIkP2pXLSuovhlGG4WvUAgBOCIAJ1xP24eZaf8ADtxp/ScJpkwGoAI1Gldw/csz1e/I118SI1piARQ4TgjX7vMlHULWP44SoLwRtVWd2OW0efHpiNfcQLULJqa06hZ5trnNSKF4jSu4f0qvaz0jHudjeE2gF6MyRMveYSFYjYLNqa7jR62xJTtWakISWKYYkqyzZ9SCQ+pR5cMXCEsR3fVYrA+JOttF1Zj6ms5T2a02mWx79PqWkaV+JendThym5BMSf/ppdKNO5f1fpUFqliYf7GQjjnT+5H7dcor9cchAvyPaSBniYiWIjX/FR6bixqJcR8qofFstUv3LAaZZD+5RZEwBoI7eKq8e5TYwYtmXD0GnCu/N3GOJ/UeCzskwPsMHMIkz2svzQQ7qOWOSXbiFVgHQmd/eSIR3RcFVVmcTjoiicaSeeOSgYsGAlRe8pMRn8g7092kR8yLAe8teV20TZzBHzJg5wfQkWAjXLIuPDaqTe4zxEW4lcJkkSpVAJ5C4gUoxw3ie6iRa3RCGg8S6VL5A8clIDFtSBOhhjiWSmCY8EMGWIrmskfptQAReLbtQ6R1dSZrJMl0BCRY1HLLzcUow1ljXuUpl8hXQxPyxXpRiHwFAHRS3S8NqaJ8y8xLksx+1IAMv7lOhbDRZEVeKbMUQCIRJ4oY444pgBA5fROhn9BUwo2JY8F3RoB8NqmQI3JJLkZF3p3IRySE6ZJQPQjB6V7WM1w6V1nVckREgY8AREsVJARFRgaIq/wBKIRo2XioAXckptII8EkAZa1tARr5aZVxonflDiVByyr3VKq5H5btM9oFXu9qfo0PN6dpU8fSvPKesHmmCcpRrEBqPgVKKUywPER93eNKJtlo8cXD6a/RE2Iw7T+vuVqqIzEyLGaEejq8K0opLzeNacP8Akm4+be3ydQ4qSThF5fp1LXhxmdmAb8sG5ZB0iVMqDvXzDqX/v9y/uWyC672qfF28N4kG8S4/UqDqZkXzBse+nlR3W+lIeotdznrw7/u0mPzD5o444tCPEvtWcfEr4sN8/8AD9H8l14vlypL47Wvtf8Aq/vWq1s4s6sA4lyI2xwy4D5v6UTdOaURvERJsvL1LKNL/FG33V4WLwz2C617ubn/AGeT7h9JfaSveb5sA44yBAa7x+1W3XkpyLksuG87K4gRE2G5Wk3XnI+0sD5hCsq/G+VdHwZ07YgdkTHfOSo8eZf3jB18ycHzKxF4gsvL3Kkw2iP7tqM2qAcl3+4lEixq924R9aNW13szJkY5e4fKnqXb4g5YnZbkI06iVpYZER49yp2nS5x87HhyVwBwS4Yl3etXIps01d7YJz22uJb9yr10c7VI5w7h8pItJllW7x6V2gJEP8yEylf+e402PygGq0JbgyR0RkW+o409SKm7u5dBRdM+N5Y7vSo14fNtgwAe5V24yA4d9x7uC8t5jQ8v3+ZQpMmpn3E2RcxP1bUIuNxlyy5TAkRD9KsyO9h0zVvA+5fPFy1VdNSXZ07lJceL1dK0v4tTXWLRyeZ+1Xz9aJJSZJvO/Zl0kS3+v1Z0oE5K+92Qp66R3vMP8q2r4kQyK0xZf0Z4F/Msf+FTlQ1bEp7iFfc3tZl6GtsmKeL8Yv+lXw5X9x5/K/3Z36nzdpu+dgc5T+/pL2/qWvWW9k2AcCzx5i+avxL+B9x/EDk29ns8f6n/d0ozaP/tG2WygEO8sB/wB/m4f0q1GssiS/eE/2n1j+Lg4d9ccu9ZtrPXdvtUo3bjK/l4ll7V/wE+Hn9jtz1m+9dYp7efI3D/d7VmHxk+FWjNHwTua0+HkLz+b7jWl4294jX8l1t40O/E24fEXVLlyyN2Oz0G2298sXh6sveoVjvdut+j3bJbHjMeeBcyu39o4P+dZndpZkQhUu6mOIer3Kt2++yIV3pL5pEBDy8u8tql8ar1g6t0/3D5q+m/jHqj4e3650Yssw7k9G+0B4+nIv7lnEHQMufFfuxg0Mfl4k5JqTTeQelUaJd7jD1P27tB+82fWJWd6215r7U9s7BLk1lsc1nlg1T+2l+9ZWz2j2gq+5vJ8+x/hvpxq8f75lJ8sP6gWvW+3R3rQ09Z2bexJjs5eB0z9XmXzhp+z61v11q0UCRbl+6/703b0q+atn2H4X25qP+Jfi1/khw4Rz3P+r9KCskn2K6WJ6+QbhcbvdZlyudufx7NljiBfcW0lTL9o+bNu5yYtzwivb3+0b/AOpB3tZXN18pUd52OfT8w/tVesXxNv+l9TzLq5I5hPh/u8n9mlk2jH3W77A09p7k3QnZUe9bY9R+W3/AAqn3fW2ltLzG2gErvcf+r2j/Cgd/l3n4iXk5lxeM/M1T5Q+0RQSbpllpxqrmR4e7rXQw110c7Z3kctF41jqG92gW4jQxIsjx5QY5fctH0FqB0dNsW5yQQi15fN/UtU0xbrRctKxLhHtiH1e2tVnt1g27sYyoz2L5eAf8qXkcjVf6g10Yn2k1e3r3aIj0oYp9rD9oZ7iIVl0t+Z+I2652i4E5L2kyR+P8AMruNn1Nce0uW5x2RDyEjjB7x9JCsr1dp266Xv3b7g0/bwbPhy3epwVydqVsv6sX0x8j6U+FOo7lebhIdkEItR2cXRy6iIVfNQ2i0akZpGuaeQx7tpe5ZH/Z0ukm8WW4yp4YvPnh5e0hR74p63GwtO2qI4P4m/wCS15hH1FW66x5a0+9r1Q33w5vFvutY5A70G35w09X5K6d2Id6+UPh1fLpC1fCfc3m9nyS+8V9L59Xk9y6lq29w/b+0k0g4kPUpEcbxpywqq8/M6fKpUS5iO5dMwb2g82q0e1fL35/0qNcu/d0p2m6y3gR3k4r2XG5X3K9F8HPa20h1z/vA9V/pRRh1cOtcof4r2tA0yF2Y1l7lIeIeG1QGZBDvHq/mUqrdCpxEukv96cW4dGvM/iWv6Q1HGuFsY+Xb4tV891yxyXyqYm55vcvob/AGdtOQx0YxdjISkSjIuf9vSt2GvU2Obyf5d8z/0rZ0y3gLd5u7pSQjRk5tq44f8ACSQy/IdV4q77g9r5Pj3Kcy24L/GvF0a5dKhQ/lh/ipjMn5dOPSpY6/j2xZc11gD317uCj0u3gIlx83f0og+G4nCHb34phtkC9vdgqV29u91G1c2Y400+0X5Jptsmx2iRFx7z/epUfHdj2fKvl81S3+493QYlvyy7h2jx6VIfMh3bSH8009y/l+Yh27qptzmeFcx826pI0a+j1s+XvxwVdvcqre8S6sUeec6eGOPuVOv8AM/x8wpyK23X93+5J2dC0S9pA7p/eIu0V2+49oZJmSRlHx6h60BtrgG2JCSbvg9X3Lj5tG/8ARtpxx19i7aEw1VqlyHq7e0R6b3+tW3qCqyT4SXu11tfbpx04N7SH6u1N+w9j4t6g03qIoxC4/j4g295P7lr+q0u0b8yG+F7r+pt/y/d0rVPhXoSLpuyj2xgSlvhV24n6lXvgnoqNpzSzRjEAfERD5vUtUffId3vGq72KvbL2cfl4bN+pA51347G0IdmFjUnSp5u0Zlh9o+5QJ00iIjqRFX6yXZ4nEVTz3kclm/Wf9A7rW/t034kS3/t8S6eI5X8t1E5r+6x2oZyn3gjt+4f6iWRaw+IEuQ6cOyyTjx/8Ad6yW63yXMeyfdMvUedXnU+e5F9V0X0xrfE+yyy7O3L57w7h6R/lU7+2200l2h0A37j5fV1fcvmvTlylyrh/Z3p5+c920V9BaV7d+H5XAhw/Kq2eT1R0/3Obn4jQ9l40z8YQkwxiz4h9oHYL3l8v9Skaw1Rblp3aIpx6ZfMylbXv5hWESmZ7F453Z3Q83/o9KskfXN25nypf9n8u0m67fqKxYt/7ObyOEs+1c798O2r6645aZAg99p/6lmt003qCwS8JcVx1gP/AAj/AMivtr+I8mH0l3fMInK0+pazp2/ab1rB2m06/TvOOXUXt7vL+pdhF5C/t4nEzL8bT/Qh8l1m4E8V1k1Z93UXXtqvp3Tj1ql6TioFukB4e3HItxe3+ZZ9fPhd2i5yZNvNqP34+Fci9yv2gLMdt0jS3SgPmM+LnmrVf3a0Y5/s7vNqtrH7Gq13eZ28Goyh/L1be7/Sp911jHtrByp7z0iQyHTu2l/wCsoVqjNfiuRkIl392W4R/pQzUdoj3y4BBlvHHgERZlId2s4F4/wRttN/I5fE6qf+3jXW2u7jJutnffZ+yP4sfcqpp3Wkix3l25ybgF2Y+zKOW3+Vay1pvSkGzhFgwYshkd/aP+tBbxpfQ9ytzrcmOEGQHS4B5j93qVayMv3d/wDwtvVbLqVHVXxc1Ffl5Nsb7PG9y+fNUaykQpT8q7yHZMz3f8X2q662b/D7sUK0zAkt7u0e2P7VnUjTUS/3g37oT7pMhy23xLbV3y5V7V71y/0dHi40Xv/AB+xD8Qbrd5t1P4bQ5twtmQ93m/SpFq+G95l3UbfZ50uL2c+XUOpwvuX0hbtM6ZssEJA/szojl1+0hVf0tqeyW/Uk6QER58ycx7cO3/A6lhX0/Xf6t2dBsltWqE9FfBy3Wlpt6fIlPzh8x+VbXbdKW+3tCQ/m350Gtl3j3GGEpgh2eLddwo5/a6u2420aHn491btr4+xztjWb22/IeYw/ZlR17uW2m4f+iESZ4PucqOPy2/9/3+4k64xL506O/T05bU/wAvp3iVPIVdK2zP5NleZ2v991jF/wDSp8t38Otr0rLz7cVEfPz/AIuH29Kivm3cbg1GqPypLggP2t+paz8W1b+/kZk9uv410zXwW598l1iQ+7tQ8wB6V/d6lRrxYrRpeC7+F26G1Ifr+zHqGvnz+nFbJ+Bx7dZ2re3H+Xy/xCR7cchWJXv4fawu+qZ4R7VId+ZkLx9K5/2p7pBvwZlsut4Zl9y/FPUkGQERiXyRHb1dVEXb1lcrk4D2pLnJ5H/9U+1R2vgZrgpxjIjsMDjlm87uVPm3Cbb5JwL224y8B47vKW2XhWuuuqv21mHJe2xZJ/tqj3/W+pLveZDYyXezj0t47RVFvlyefP5pCRl4e2qtkm01Mhku523qT9vstql3kAkT2osdx3IunERqW3/E6lu4kFaqvVTLk5t1sva/802W+v0/C0hYpE66O9muT3y2W/USxP/Z2dfvBvxxeLp9S+sPjv8Ebd+A/9obD1x+X/ebmRfcK+aNAXwLffZNs8h4kNW5slyjL96Z9XG5K1/8AU/8AD2aH8O/iFddDXJm52eQx/wDm0+4R9q2v4l/EGz/FOw229R2jgXGMGBxupj9KxC5w4M11uVEiOMk/y2W+Xn1/qROK9+G6TfjyQ5UjPlkG4RH1L53zPT6b3Xq610a+LydWp37G3/D6bXUOnpFsYIDkh8t6R0t+3+lD9L/AA7/AAS5SZ9xejOgwfyyb4iRfnj7lhmmNcyo/bhcMgbc/Zt9OQ1/61p3/ae+b/4b+J1j07g3Tq/4X9q52x6Vs02wtdtfsV/y0u3RklyZl41ZcrvNuP4j8w3uW8Hl5S8u0fSr/d4cePZ+b2N0z37g25esU/b/hxP0vb5Eq1X2Z2fHMox+4R6ffsTjVwn324vWdxgLgy082bTx7fSXuWf2u53bM+2h8q4cWtd92/0YnqyS2F8k3e0dohxwd5b0Q+khL7u4l9K/Di6yb/p1jUcyJzud1t4j5u0bVV3/hpDvc4YdwnuA0G8wH5gkf3e31KY38Nn9Gyl+DamyjOf7t5fT9uXl8tE3x9jW2PZ/Xz/4JtbV3+x8sV9p6W+JNqN1uy3t3lSehsu77VbpcwWHh5bTptdVeb9P2q/wOwtPuyYgtyTce83tqX/3LRY/wyul0sYXiJ2fnP/uG3v8A5lZg/wBqbb9qj5p3X4N2q65Ww7g25H3B0bVj+vdVz9Z6ll3eRz5Tzr2Qf0ii3xL+GV00PcxGcy+2D7efUSk/DO2ybpqK02aI0LpSnha20y6h3fyiu1yK226/uLlycbf01r32fT3ws22e2W63k4/hBaeFvxP5pD0/wAycud4n6h1NAt+nJ4SbgT2Dsb/AIQP+5ErJ/s3ePwrTf8AeTsp9nl2f5nypA+0vL5VSG7ldPhF8Qb5arZ+xedpGz/1e3pXkGq3szZ/qdz/AKYvovQfwr+I1luj98uF/a7Wf+6N/M/9Yr6Bs9ouVq01bW7jL7ZODPnSff6e5fPXwx1nqDTetbFapV/lToxv+PZlyy2kW0f/AFgvo+TqJq/f3qfEab8Tyy/i/SrdWpZfV1vsy/H+1RzP/U+158kYkyrFepW0jR100+wRTE8N0t+4vMuvy9Wn2yYvN8jD7+w/8q/V7hS+x8j9q7l/kFdi0eW5V2FfO6lEetEIDkUqRF1I3m8m2l/66xZ+d6c1jW999R6U40e7iRILbbq5a0qC1eIdYk3c37Wz9SF/iZ1w6F5r33+23lC9v02d2k2a1v4XzCfaEefs83m/tW6/D0yLTUf6hXwpp34qaw0tGG3R54SIdOls/T+lbxoT/aaudm08EWfZAkyA8W6Zfq/5rUuxN60+NlU1P2xT6T1ZquPpfTsm6yw3dDIebq+1UaZ/tB6VlWZom25x3N4dgd1y1vjRdtS1x9f8QdVz3pA2y4vA3Tud7+lUqxadud8ugW+1wHZb/s2l04f6l9R4/F4fGwd5M9jF8hWdvu6qH2tazNSR5dwbZ5wBwE291e9U+HcHn/E9633/wCG63fB/wCGciz6kZ7ReLjvj16sfp939axjWegNR/DOV2eawR29zflj1F+bH+b0rN6h/aL2+1n2u5n248v9l0iSHi3UOpelE2yIsi70FsV7t0y0g829w/b6f5U/Lv7TIDyWj+1eetT3Xo5Vq5a1/x9h0yIfM3/pUpkhb3E1x9SpM3Ws5rIRZAZAY05pZf/qot41ndn3+cM08g/4bdMXP0iq1V/yK2z+3z7F8kXCFCDnSHh+v0rI75qS4ao1F2G3t4sf8A1X/Koj8+46mndg/EXXZlfr5i/m/m/pWh2L4S28tGuxj1LztSH/u8Z3aH2/crbV0103639i237eJ1Zk03ptmyf2qS8c2QXifm6ff7V5rPVbVqtTr0g+3zG/lRoxd/m8qo0z4h6x1JeeZLjFAbD9p2Pq6faXpUt6aNymk/Jku+Ujcxz/0iomw+vT68k2bB8n+g609pnUWvLqM/U1y/DbWPhx3H+kR/zLb2fhX8N7/AKdGPY2i/E2emVj1feq/YJduvekw03+Nlbm/34uEP9SN6f8AhJ8N5oA5pvX3ZLsH+9+5X61j/c1iFmR2yK+9m/18/wCSr6f1H/sfqb8KujbTMRw8c3R+1bfG/Br4wy5Flx3hPzCWd/Fb4S1pYLjf7h8QYt8uERn8l+hYfY4vxBt8Zl2z2+6lD/4b0d0g/Sp6u6pZ6+yv4M7P9k2/Y2PVEp2y2d02HscR3kQ1qskvd1vdwu4f7w8b+7mD0+5Q7t/th+ISXb9AuVvFvqfOM7yifm6Q/mJWC2atscS0+y534kP3CS5+5vstF+g2bZ+x18n058I/wDaaudmktWq9kdwjZdfiX5f1L66s/xS0xf47XJ1DHEjpyxbpXm44/mPqWIf9nT4X2bV8m4a3ukB24W63mXzR+31LftbaI0jE+Hsu4afskS2XCOHMD3E2Xl/Stz7Htr1/YwYsn73p4gJqF+3sXwZNukG9f51OnzJm4P9q/Tksb1Z/2h7hpi5hY/wDYXv8ABt9d+1bJ/tH2vTmo3Yl5b58mP3kI/s1l111V8L41y/EG2A+8fT1f/X+ZaOHx+pG3X7C/l8hnb3E7Fwt3xs1BfC7fJscW3Wx7p+bWn9K+j/h1Z9NfEDTbUuVbnZk5nrjPnh/L0ivm2x6Y1dr2cNx1A0dp0+3uixx8321/V/Stj0xrR6wXlqDpnHsyP5h/wDxKezVq9e7/sZZXy8f7/g1f4i3SdoDS5tWG4xYMz2D/K3kXl/0LItJfET4m2e6/j3Z3bxEf8e3f4fy7j4dK1rXmg7lrzTU6+XCQ/JkRmsm4zNdtP8AN/Ks5+E11u2lbQ/253m2tz9h7S+1UquP0f7PZ/8AQ7Zf2Krf4X6d+K/xa/2jtLUKJYLZ2uR1zM8dnlqP6slyWj4+gLPJgXSQc26TOrzB9qn2+322dM/G4bTbLh/zI49A9+4Xb3W21bA+3/ABXur/2hW2s2RarP7H+1Lffb0mK2K/wbK+9IuEwGB+1x5XnSN6sl1/E4+x3sA7M+yXvL3K3asb03qZ4mHGD9uYV+n2oZbNJabseX4XAc926tVLfF+Vd/wA9Fay7PjH2eX9xN0Xbrfbrc9c73IDu3F/f/s6lK1Dfb3dGexacgOMs+97u/m/pUaTZbhcTpp66R3o9uPfIeb9Q+lW4tQ2/TMEYsdtuW+wGIRj8ol5ff6SWh9S06lVq3Vv+f/oZZ1t/2qZq3oO83x7tc++RydP/AILvUvbrbNTabtTtsj2znx+p0w6hVplwdb310rhcZbbLh+x77fL/AEl7VFt0h6wQznajub9wdfP5e0g+0lW3x9P/AI3+1/8A03ts1t1Kx6ftdskR3XmH+yXD1n3ZKXcIdvktG3eJ7D0gPp3fcp9w0zIuTvb2HnWmXuuOW1D9QaX+HEgG66glP3G2D1PNeX7uH6ly9l1sv6/0O/h+F/29mIas1Pq6y6hG7aeufMteQ04f9n7V9EfDXXjmt7fJhy2v94e+b/wDUsg1xovSmkX3rhb3gPTE4Me1+3/wWf6d+IN20jqn/AHoTtwP/ANl/iWr+mXer1tW1e/8ARw/7pX4/K7l0/c+y40Eoo7Xus+3/ACoiwYlT+0uBkfT6a19P2qnxfi5b7/JGFbJDZSHepvzd6udvdJ8Mv99d8vp2+n9q56y/q9v9y/I5mryf90fIdnF4p07sfcZl/N7v5VIaI3T5fHup35bV47JAdlH8sg2kXl9wqb223s/skg3Qf9y9y61m1/z6mFsbL/k9GjZkQ0FwXfp+ldlzAHi5Qvp/d4qZzBfH5w/b1dK4qfL9uX9S47Z+j1y06DozBIdw+0sU8JkQ+7cRIV3/AP64+pdUfe/x2V+5T7g3gP4mPlXkZk2j2+WvCozjrn5+H+9EGBx+a44PpxWvHf22K1T+0ly2iP5mX1elD3x5Vdvh4oi5c2R3Dx6ff0qDIuTLo7qfUty3o31D2qVfUUp6p0L1dSB1ly4b/ADvN7VaLvHbk03bS+1VGbbxae+5d3UvT/g5Wytp/6jXkS9v1Vab92Wz+4u0R9uXl81VTtUpw6G5kRH3lWnStHftR/D2a56113l/70H+pUq7wxdH/dzHj1/b7l1sWRvucfJ1Z1+pt/7NvxYutgu4tvyOZa3/P7f8v1r7201qqFqCCEqK6JB9tfzW9Xv+1fG+hPg9Nlsx71p6T/vP7wB/rWz6O11dtKXv+z9V+f/APu5L02pXzWq/Z5vavpdu1T6z1Zqa16bgvXG7SAYYYr31r5l88X3/a0+Id7k0jaBtx9l2b1nfx++IN3v+qhgw7x2yJ7gD+hX79nmz3a79r1Dcf8Afy31/qXR+xLdr2Y/bXp/aA39J/7SH49w1FfJb8d/2e1WLT8/44WS5g9dr5M5Af8Avf6V9YWSz/7P2e59o2h93t/pVEvl1jQ9VyYNvtyf2/b+8rStK22/UqenP/4bV+2V79qHw3qD4s3vRup27ld5/wDve+9xL6r0D/tA6S1k2xQ54RZD38H6VjHxx0Zpq+xhu1wueNxbLd9y+eb12nSr3/4Zfe+Rj9v1KXw6/I5r9rNWP+18f/f9p/8A9T7s+IPxksujID5MGD8g+hlv01/SvjvXXxf1rrU9xutW4P8AdwLH+WlVLbbrd7++xEuV1kvdn2Zdf8q0XT90j6fuyj1tN/V/1e309lRj+N43B7dfz/szW42y020P75xY93m9Sscu32aHbgct1wk/i4/7x5v9StU25x761zTlsB7cMfy/L9CznX2nLnKkFdrNLuEkB3kyAe1v2dKs4b3tr7m3t4+5S8a6N9158erz8S5/a9Sj+3P5M14R/b8v1fL+5Zg5erldtSm1bbg7Is3n+7+tUe9lqfVs56S9b5gB/lWg6d/aO07ZpTtyiSRl+0nNtepduy5L7+z7P8A/pz+zSvdUvth/a61t/d4Fv8A/v0pfxN8eNYag+E8W6ypD7sfx/8A1/qV7f15pyfG/s81ptz68Vjmrn9S3nScv/a/sDsfaTPLb/Sg02r7/wB39m3p+5u1+z/Q/m1TqPUeo5RzrpdZbsge4S9P6V2/d40ODzrnOflSD3+bzF3/AG9SL220S7tM+W18gBqRH9y9c0gVxkH2hskX22b/AIlr4fHt/u9eZ8jlyt38e/b/ALn3T/swXi4XD4QzrlcLzMlxyM2mWHv93Aev+pZfqx1y7ax7RId5scC3B6ly/r6HpbSTWnrO832f91t2+72dShfD6b+N3s5Fya2P/wDPb/0Lg+s9P627W9m52/A+5tt/p97aeZ/D7T2b5n1D+9/T6Vn+rNZarud5+XMyd/eX2/6lDvf4h2123x3nHp4fwf/AHl69N6g/vN15n1ev+dcf41X+p9D0fU21f2d+/8AYLw1z9+7+1658y/2d3b2erX/AKlYpU+0aeu3aW2y5/vI/wDL6Va9Jae+y21+4+1Zf8TL/aPxeTIdcye+lbeHw/t21Y5X1P8ArX3V/ZtOkNWafZudwud1n/vjW0f/ADf9SvV51pBgwS/3r2/9VfIFiuc+/v1lznj+n+lbdZrN2qyyZc+492f/AH4d1d/A26r8L6P/AH8jH6h/s/8AM2e4/u7Xw2D/ANt7iUeXpPUtxZ/d/T9vuWR69/t9k+XcORc/L4/0rL9P3rVVg0c7d5lyPlRtyD3b9lfy/m1/Ssuwuvt/3vXl/A0+n5Gzt/Z/vN4a/wBt4dt7A/bpH+n+lZnrv+03d1o5T+TfTlltP3q5/De93q6/D38ekSDkSA6e+vL/AIU23x2b1cWZNw/ef3x+337lxsbbNfXtsX67fH/6dFttN2u1b1Vf8jHl+N9vlx4l4/eJ/Bvu/L/ANx7/wCS0bTev9U6G0q/b2+fK/H3fl/aPt/mVX0h/Z7U7FvjfNf/AO8PfaPtWl2v9q1ZbbnI9/8Au/t/yrl5N9vj9WrbXv8AY6H8XU2f9zf6f9jG/jBcf9ovg9L/AOyH2pHv7P1fq9KxD4c/H74iXDULVrkR2rlGD8/9n/KvqjV2pLhpu90uFvb/APvft/qVbh6s/ELkzcIdrt9tPf8AtuXTb/qXpP5vK1eN7bbU/Qx8vh/H3bNbbdbe3/RzcdKzdf8Aw6mWyPbv7R1df2+r2/aqp8Nvh3cNOdguFwe/HpH19A+5aNZ/ipdLpqh2z/jf/N+/2fZ+X1Kx/ifYdQdgt9z7XJ/9t9q59/b/AI/+Pev/ANmddVn/AN3a23/s1aP2H/ZuP2iJ9P8AePv/ANq+YfiFcfjrqjVf4Fp+3O2y3e/3V/V7l9Q6TtsaHYY0S1x/73+1/wCpbv8ADG2/7QW128W+R2aPH+bL5f8AlV/B8/X1/wDP41V8Wv41/bZ97y/Z/wDFb4eW6Tf357sqb19vt+79Sp/w4158VvifqqXbbjPdtkWP/efT7V9j65uVmh2dtm3s831yf/mWPW/VkaP32/T9r5v1/wD39S0W5f8A1LftdXZ8f49PbbVb6/7mrfC/Vce96d/CrpP7dcI/f/Mqv8dvhz/tDpqX+F82JJb79lP/AJV5Y9QXPTd6a+e3/wB/7vctK1T8V7XbbT/vXNiSPb9q4fK+Hre3s6/W51uP/wCz8jV21/j/AGP54d8S9Qab1G/AvEjmzI/5fqX1V8N9Z2/W+mglwP7R/e+/q/8AP5lj/wAeP2W/3CffLhcf9483t+1UP4T3u6ac1O1+Fv8Ay/Nl6F1fT+b72v8AJytrjbWv/e/U/olp643D8N/tFvf531+pUjUGuIdnuvNucjl06W2x+z/qXuj/AIqadv8Apz/fbj2WcHSz5v8UpWqLbpjWttakS3u/wDkXRz/ACq1Vf8AJyvj62v26fH9il621hb75Y7e1Z7gHPlvY/6f7lZNN/D7S8G09nvb3a7hI7x/5VjnxB1Jpf4b3kG7XbHbvf/AG+1UqJ8RPi5rvWttZ0/b3bdB8/mXntrfV9lftatV6+tX4+v7V8mufGv4UafmWyTddP3Ntq4R/f/AE/qWP6B+KGr9CagjRb472u3/wDP6f5lttv1l+A3s2L9ctkbu/8AL9qGfFLS2n/iBbY1zsD3yN5/yrl2bHbeV6/b/g7eJ9fW1r7/AGfX/wAl5sGsLLqq7Rro1cfkM/s2/cQ+pfYGl7xEv9hZkRHAeYH0/av51NMWu96ckm/aHjnw/wDgfcvpT4a/E24WfRsqT+Nu9v8A3f2faozPZ2Vb61/4H9Q42rq7O2q3tVfs/p/B9Yy9RxrbbXn5D3dGZ6186fGX4yWiPp163xO88/T7vT9qpmv/AI/3O92Bq2aeePtv1e5YFqu53e83n/v/AJsf7/N/Sq83p+5q32bWqq97b/1Odi/1H43H36v9y7bf/Q6sXwuuGr7s7eLg8cS2en09X8q27TWstF/C+1dtad5twd3Vp935K1XG3/DTs8GL+Nu9o/3f+D9qz/WGiPhVcbq3b5F87BPDp/mXk9VuvtbfdtbYv5/X9v8A1O5s5L6dfZ9f38f/AE3y+2q623Xj8n/eDY+r/wDKtK1z2j+yW+2QHZkgPZ5v5lSPhx/Z7UGm41z1A9/4e37fV9qJ6z+KWnbDdTt8D5v/AL/qX0v4e71dfbtW1e7P3/B8r23q+z2ttrXb22/8jX4zN1ut4/2d1rP5Vvf6T7+79K1a53rS+lNPf7tciZ7Mf/L1en/1618r3v8At/8Ar212/wDBf2/f1fq/StQ0n8IdW/ESU1J1g8ce39XR+n/2+lcr6nyd19f5GtVV/wB620+r8Ti6/a3bfdtb89X+1f8ARZf/AG1NQa47fH0zIdf5f7z7f1e5R9G/CK6agvf4vrF515m3u9/8/wDYq/eLRpv4T68ftmm7j2v8U/vHz/Kttb1pbdN2dtm6T22eYP8As/v/ADLp5/J93f8A7PVV/f39yvP42t8fb/c/Z8a/r/Rz1Bcbp2U+xtv8r2rV9N3v8P0c1Jvj3+4f836v5FjP+1ukLldXf/AS8iP7fb936l1rHXlzv7X+zujmD5Ht9Pq/y/au/wDLb/a7V+x/8nP+Nq2/s/Yq+t73GvmoJt3t7nbI/wA32/3fr/Svpv4H6wt+pPh5GjxHj5kcf/37fSvlaJ8P7tGtfY7pIDv6/T9vuV3+D+spmi703b4rv9n27f5ff9y898bdt1+T27Vb/k7HyONq7eH19vbf/wBPoq8ag1FcNU1t1skO94f7v9q1n4e6U1P/AHG6XW4v9w/s2/uXGgNQab1FqZqTbjDl/vPp+79y3vUfxB0xofTpvypLP/5Hn/St2n9u2yv6u/8AE4ezt/1G77e3/Z84/wDab1o1puzs6ftZ/wB7+f7vt/yqkfCT4N3PU7v4vf2D/D/y+n7v/X1K06YtFx+OnxJevF0ac/Brd9vT9v8ASvqqW7a9N2f8MtrTceG3/wA9q3aet/V3/Jq3V3/85/6/p/B4Xkcn/Tdfx9dfd2d/3u3/AN/x+n8nyl/tLcdF6qG16fuR8qP/AC9X9q+sPh7qOXfrS1Lvj3N5n7P/AKV59v8ApW2z5v8AtBHH5H/Uvr34d3SNdLQzFjx/73+0d9u3/Wl+Pv8AJ2V1/b/eX53G1td/3X/5Gha21XG05bXp1zkcv2/9a+a7b8eNUahvTtotjLrbL/8Awf6lZPi5p3V+pLqEWDId/Cfv/wCX7VX7L8NtWaLtTtyj2vtcv2/9y5fN5nJtsfF1+n/I1ej8Li6eH292z2/Z/Jp9g0HcdRPNyNYPn1bf5f8AMtL/AArTulLX7B+/3/d+lUv4e6u1FdbSzEv1sOP/AOX/AN60B2226Z2eRMb6fp/qXqfj6tXR2fs7P8v9nhubyeTt3v7uvbfq3/qB4734vJj/AIXb+zxnfevj74/fDG42fUvb7W049Af/AMq+2rZfIdwdJmE7y+Wfv+pfPPxo+IWptN6qGL/drja/4/v7ffuXnvV+NzNn2/b/AHV7d7V9v8f1fP6O96JyOLq7NfZ6r2+t19bbf/f2fJcG6zbL7/r9f6Ftvw5+L1vtV1Z/H5DzP8v8v/q/pWSX+XD1NeT9r39Xl+3/ADKvf7PXK4XeNbbW0b0t3y9X6fUtWj6X9T9j/g1X+b6V8/8AxP8A3f8Awf0i0P8AFnT91tAvx57b32f/AHq6y4Vpv9s5s5r/AHvr7f0/avkzQnwZ1fpq0vSrhedzH0/9K2HTc3Uku3VtsCebsH/f/wD5l9V6d8jffb7e1r/b/wAGL5fx9PX29fX7P/5vH9T4k1z8Ibhb7y9FtkhyXE3fLH7PtVUj/CrWf/E9q/8Al5193y4c60sf+2/m/wB//pUP8bteP90/b9v/ADrxb/1301vbs7W7/wBv/wAv6v8As9tr9V+Q9q/1K9f/ALf/ACv/ACf/2Q==",
    hint: "رمزها هو $"
  },
  {
    id: "gen_b1_002",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هو الغاز الرئيسي الذي يتنفسه الإنسان للبقاء على قيد الحياة؟",
    options: ["الأكسجين", "النيتروجين", "ثاني أكسيد الكربون", "الهيدروجين"],
    correctAnswer: "الأكسجين",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "يشكل حوالي 21% من الغلاف الجوي"
  },
  {
    id: "gen_b1_003",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي أكبر قارة في العالم من حيث المساحة والسكان؟",
    options: ["آسيا", "أفريقيا", "أوروبا", "أمريكا الشمالية"],
    correctAnswer: "آسيا",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "تضم دولاً مثل الصين والهند واليابان"
  },
  {
    id: "gen_b1_004",
    category: "معلومات عامة",
    points: 200,
    questionText: "من هو مخترع المصباح الكهربائي التجاري؟",
    options: ["توماس إديسون", "نيكولا تسلا", "ألكسندر غراهام بيل", "ألبيرت أينشتاين"],
    correctAnswer: "توماس إديسون",
    answerImageUrl: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800",
    hint: "مخترع أمريكي صاحب آلاف براءات الاختراع"
  },
  {
    id: "gen_b1_005",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي المنظمة الدولية المسؤولة عن حفظ السلام والأمن العالمي ومقرها نيويورك؟",
    options: ["الأمم المتحدة", "جامعة الدول العربية", "الاتحاد الأوروبي", "حلف الناتو"],
    correctAnswer: "الأمم المتحدة",
    answerImageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    hint: "تأسست عام 1945 وتُعرف اختصاراً بـ UN"
  },
  {
    id: "gen_b1_006",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هو أكبر محيط في العالم من حيث المساحة؟",
    options: ["المحيط الهادئ", "المحيط الأطلسي", "المحيط الهندي", "المحيط المتجمد الشمالي"],
    correctAnswer: "المحيط الهادئ",
    answerImageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    hint: "يغطي أكثر من ثلث مساحة الكرة الأرضية"
  },
  {
    id: "gen_b1_007",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هو الجهاز المستخدم لقياس درجة حرارة الجسم؟",
    options: ["الترمومتر (المحرار)", "البارومتر", "الهيدرومتر", "البوصلة"],
    correctAnswer: "الترمومتر (المحرار)",
    answerImageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800",
    hint: "يُوضع في الفم أو تحت الإبط أو الأذن"
  },
  {
    id: "gen_b1_008",
    category: "معلومات عامة",
    points: 200,
    questionText: "كم عدد ألوان طيف قزح الأساسية؟",
    options: ["7", "5", "6", "8"],
    correctAnswer: "7",
    answerImageUrl: "https://images.unsplash.com/photo-1508615039623-a25605d2b022?w=800",
    hint: "تبدأ بالأحمر وتنتهي بالبنفسجي"
  },
  {
    id: "gen_b1_009",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هو المصطلح الاقتصادي الذي يشير إلى الارتفاع المستمر في أسعار السلع والخدمات؟",
    options: ["التضخم", "الركود", "الانكماش", "الاستثمار"],
    correctAnswer: "التضخم",
    answerImageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800",
    hint: "يقلل من القدرة الشرائية للعملة"
  },
  {
    id: "gen_b1_010",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي عاصمة جمهورية مصر العربية؟",
    options: ["القاهرة", "الإسكندرية", "الجيزة", "أسوان"],
    correctAnswer: "القاهرة",
    answerImageUrl: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800",
    hint: "تُعرف بمدينة الألف مئذنة"
  },
  {
    id: "gen_b1_011",
    category: "معلومات عامة",
    points: 200,
    questionText: "أي حيوان يُلقب بـ 'سفينة الصحراء'؟",
    options: ["الجمل", "الحصان", "الفهد", "الظبي"],
    correctAnswer: "الجمل",
    answerImageUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800",
    hint: "يتحمل العطش والسير في الرمال لمسافات طويلة"
  },
  {
    id: "gen_b1_012",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هو العلم الذي يدرس الكائنات الحية وتطورها ووظائف أعضائها؟",
    options: ["علم الأحياء (البيولوجيا)", "علم الفيزياء", "علم الكيمياء", "علم الجيولوجيا"],
    correctAnswer: "علم الأحياء (البيولوجيا)",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "مشتق من الكلمة الإغريقية Bio أي الحياة"
  },
  {
    id: "gen_b1_013",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي الدولة الأكثر سكاناً في القارة الأفريقية؟",
    options: ["نيجيريا", "مصر", "إثيوبيا", "جنوب أفريقيا"],
    correctAnswer: "نيجيريا",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "عاصمتها أبوجا وتعد كبرى اقتصادات القارة"
  },
  {
    id: "gen_b1_014",
    category: "معلومات عامة",
    points: 200,
    questionText: "أي عنصر كيميائي يُرمز له بالرمز 'O' في الجدول الدوري؟",
    options: ["الأكسجين", "الذهب", "الحديد", "الهيدروجين"],
    correctAnswer: "الأكسجين",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "الحرف الأول من اسمه بالإنجليزية Oxygen"
  },
  {
    id: "gen_b1_015",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي اللغة الرسمية الأكثر تحدثاً في العالم من حيث عدد الناطقين بها كلوغة أم؟",
    options: ["الصينية (الماندرين)", "الإسبانية", "الإنجليزية", "العربية"],
    correctAnswer: "الصينية (الماندرين)",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "يتحدث بها أكثر من مليار شخص في الصين"
  },
  {
    id: "gen_b1_016",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هو اسم الوكالة الفضائية الأمريكية الشهيرة؟",
    options: ["ناسا (NASA)", "روسكوزموس", "إيسا (ESA)", "جكسا (JAXA)"],
    correctAnswer: "ناسا (NASA)",
    answerImageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    hint: "أرسلت أول إنسان إلى القمر عام 1969"
  },
  {
    id: "gen_b1_017",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي أسرع دولة في اعتماد التكنولوجيا والسيارات الكهربائية وتعتبر عاصمتها أوسلو؟",
    options: ["النرويج", "السويد", "فنلندا", "الدنمارك"],
    correctAnswer: "النرويج",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "دولة اسكندنافية عاصمتها أوسلو"
  },
  {
    id: "gen_b1_018",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هو المشروب الأكثر استهلاكاً في العالم بعد الماء؟",
    options: ["الشاي", "القهوة", "العصير", "الحليب"],
    correctAnswer: "الشاي",
    answerImageUrl: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800",
    hint: "يُحضر من نقع أوراق نبات الكاميليا"
  },
  {
    id: "gen_b1_019",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما اسم النهر الأطول في العالم؟",
    options: ["نهر النيل", "نهر الأمازون", "نهر الميسيسيبي", "نهر اليانغتسي"],
    correctAnswer: "نهر النيل",
    answerImageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    hint: "يمر عبر 11 دولة أفريقية وينتهي في مصر"
  },
  {
    id: "gen_b1_020",
    category: "معلومات عامة",
    points: 200,
    questionText: "ماذا يُسمى نظام الحكم الذي يتم فيه اختيار الحكام عن طريق الانتخابات والشعب؟",
    options: ["الديمقراطية", "الدكتاتورية", "الملكية المطلقة", "الأوليغارشية"],
    correctAnswer: "الديمقراطية",
    answerImageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    hint: "كلمة أصلها يوناني يعني 'حكم الشعب'"
  },
  {
    id: "gen_b1_021",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما اسم اللوحة الشهيرة المعروضة في متحف اللوفر والتي رسمها ليوناردو دا فينشي؟",
    options: ["الموناليزا", "العشاء الأخير", "صرخة", "ليلة النجوم"],
    correctAnswer: "الموناليزا",
    answerImageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=800",
    hint: "تُعرف أيضاً باسم 'الجوكوندا'"
  },
  {
    id: "gen_b1_022",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي السلسلة الجبلية الأعلى في العالم والتي تضم قمة إيفرست؟",
    options: ["جبال الهيمالايا", "جبال الألب", "جبال الأنديز", "جبال الأطلس"],
    correctAnswer: "جبال الهيمالايا",
    answerImageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
    hint: "تقع في قارة آسيا بين نيبال والصين والهند"
  },
  {
    id: "gen_b1_023",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي العضو في جسم الإنسان المسؤول عن ضخ الدم إلى جميع الأنسجة؟",
    options: ["القلب", "الرئة", "الكبد", "الكلية"],
    correctAnswer: "القلب",
    answerImageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800",
    hint: "ينبض حوالي 100 ألف مرة يومياً"
  },
  {
    id: "gen_b1_024",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي الدولة الأوروبية الشهيرة برياضة مصارعة الثيران وعاصمتها مدريد؟",
    options: ["إسبانيا", "البرتغال", "إيطاليا", "فرنسا"],
    correctAnswer: "إسبانيا",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "تقع في شبه الجزيرة الإيبيرية"
  },
  {
    id: "gen_b1_025",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي السلعة التي تُلقب بـ 'الذهب الأسود'؟",
    options: ["النفط (البترول)", "الفحم", "الحديد", "القهوة"],
    correctAnswer: "النفط (البترول)",
    answerImageUrl: "https://images.unsplash.com/photo-1618042164219-62c820f10723?w=800",
    hint: "مصدر الطاقة الحيوي الذي يُستخرج من تحت الأرض"
  },
  {
    id: "gen_b1_026",
    category: "معلومات عامة",
    points: 200,
    questionText: "أي من الفواكه التالية يُعرف بـ 'ملك الفواكه' في دول جنوب شرق آسيا رغم رائحته النفاذة؟",
    options: ["الدوريان", "المانجو", "الموز", "الأناناس"],
    correctAnswer: "الدوريان",
    answerImageUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800",
    hint: "فاكهة ذات شوك ورائحة قوية جداً تُحظر في الفنادق والطائرات"
  },
  {
    id: "gen_b1_027",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي الدولة التي قدمت تمثال الحرية كهدية للولايات المتحدة الأمريكية؟",
    options: ["فرنسا", "بريطانيا", "ألمانيا", "إيطاليا"],
    correctAnswer: "فرنسا",
    answerImageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    hint: "أُهدي عام 1886 بمناسبة الذكرى المئوية للاستقلال الأمريكي"
  },
  {
    id: "gen_b1_028",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هو العلم الذي يختص بدراسة وتوقع حالة الجو والطقس؟",
    options: ["الأرصاد الجوية (الميتورولوجيا)", "علم الجيولوجيا", "الفلك", "البيئة"],
    correctAnswer: "الأرصاد الجوية (الميتورولوجيا)",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "يعتمد على النشرات الجوية والأقمار الصناعية"
  },
  {
    id: "gen_b1_029",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هو أطول كائن حي عمراً وعاش في الأعماق لأكثر من 400 عام وفق الدراسات الحديثة؟",
    options: ["قرش الجرينلاند", "السلحفاة العملاقة", "الحوت الأزرق", "الفيل الأفريقي"],
    correctAnswer: "قرش الجرينلاند",
    answerImageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
    hint: "نوع من القروش يعيش في المياه القطبيّة الباردة"
  },
  {
    id: "gen_b1_030",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما اسم الجهاز المستخدم لقياس قوة وسعة الهزات الأرضية والزلازل؟",
    options: ["مقياس ريختر (السيزموجراف)", "مقياس هيرتز", "البارومتر", "الترمومتر"],
    correctAnswer: "مقياس ريختر (السيزموجراف)",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "سُمي نسبة للعالم تشارلز ريختر"
  },
  {
    id: "gen_b1_031",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هي الدولة الأكثر إنتاجاً للشوكولاتة والبن وتضم المقر الرئيسي للبنك الدولي؟",
    options: ["الولايات المتحدة الأمريكية", "سويسرا", "البرازيل", "بلجيكا"],
    correctAnswer: "الولايات المتحدة الأمريكية",
    answerImageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    hint: "يقع المقر الرئيسي للبنك الدولي في واشنطن العاصمة"
  },
  {
    id: "gen_b1_032",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هو أسرع حيوان بري على وجه الأرض؟",
    options: ["الفهد (الشيتا)", "الأسد", "الغزال", "النمر"],
    correctAnswer: "الفهد (الشيتا)",
    answerImageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=800",
    hint: "تصل سرعته لنحو 120 كم في الساعة"
  },
  {
    id: "gen_b1_033",
    category: "معلومات عامة",
    points: 200,
    questionText: "ما هو المفهوم الاقتصادي الذي يشير إلى مجموع القيمة النقدية للسلع والخدمات المنتجة داخل دولة خلال سنة؟",
    options: ["الناتج المحلي الإجمالي (GDP)", "ميزان المدفوعات", "الدين العام", "احتياطي النقد"],
    correctAnswer: "الناتج المحلي الإجمالي (GDP)",
    answerImageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800",
    hint: "المؤشر الأساسي لقياس حجم اقتصاد أي دولة"
  },

  // ==========================================
  // --- أسئلة 400 نقطة (متوسط) ---
  // ==========================================
  {
    id: "gen_b1_034",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي الدولة الوحيدة في العالم التي تقع بالكامل داخل حدود دولة إيطاليا وبها مقر الكنيسة الكاثوليكية؟",
    options: ["الفاتيكان", "سان مارينو", "موناكو", "أندورا"],
    correctAnswer: "الفاتيكان",
    answerImageUrl: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=800",
    hint: "أصغر دولة مستقلة في العالم من حيث المساحة والسكان"
  },
  {
    id: "gen_b1_035",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي المنظمة الدولية التي تنظم سوق النفط العالمية وتضم كبار الدول المصدرة للبترول؟",
    options: ["أوبك (OPEC)", "السامت", "البريكس", "منظمة التجارة العالمية"],
    correctAnswer: "أوبك (OPEC)",
    answerImageUrl: "https://images.unsplash.com/photo-1618042164219-62c820f10723?w=800",
    hint: "تأسست في بغداد عام 1960 ومقرها حالياً في فيينا"
  },
  {
    id: "gen_b1_036",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما اسم الكيميائي السويدي الذي اخترع الديناميت وأوصى بإنشاء جوائز عالمية باسمه؟",
    options: ["ألفريد نوبل", "ديمتري منديليف", "أنتوان لافوازييه", "لويس باستور"],
    correctAnswer: "ألفريد نوبل",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "تُمنح جوائزه سنوياً في السلام والعلوم والأدب"
  },
  {
    id: "gen_b1_037",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي التكتل الاقتصادي والدولي الذي يضم روسيا والصين والهند والبرازيل وجنوب أفريقيا ودولاً جديدة أخرى؟",
    options: ["مجموعة بريكس (BRICS)", "مجموعة السبع (G7)", "المركوسور", "الاتحاد الأوروبي"],
    correctAnswer: "مجموعة بريكس (BRICS)",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "اسمها يتكون من الحروف الأولى لأعضائها المؤسسين"
  },
  {
    id: "gen_b1_038",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي أعمق نقطة معروفة في المحيطات على سطح الأرض؟",
    options: ["خندق ماريانا", "خندق بورتوريكو", "خندق جاوة", "خندق التونغا"],
    correctAnswer: "خندق ماريانا",
    answerImageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    hint: "يقع في غرب المحيط الهادئ ويصل عمقه لنحو 11 ألف متر"
  },
  {
    id: "gen_b1_039",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هو الاقتصاد الذي يعتمد على استغلال البيانات، الرقميات، الذكاء الاصطناعي، والتكنولوجيا الحديثة؟",
    options: ["الاقتصاد الرقمي", "الاقتصاد الأخضر", "الاقتصاد الدائري", "الاقتصاد الموازي"],
    correctAnswer: "الاقتصاد الرقمي",
    answerImageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    hint: "يقوم على التجارة الإلكترونية والتقنيات البرمجية"
  },
  {
    id: "gen_b1_040",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما اسم الجهاز الطبي الذي اكتشفه رينيه لينيك عام 1816 للاستماع لأصوات القلب والرئتين؟",
    options: ["سماعة الطبيب (الستيثوسكوب)", "منظار الحلق", "مقياس الضغط", "جهاز رسم القلب"],
    correctAnswer: "سماعة الطبيب (الستيثوسكوب)",
    answerImageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800",
    hint: "الرمز الأكثر شهرة لمهنة الطب"
  },
  {
    id: "gen_b1_041",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي المدينة التي يُطلق عليها لقب 'المدينة التي لا تنام' و'التفاحة الكبيرة'؟",
    options: ["نيويورك", "لندن", "طوكيو", "باريس"],
    correctAnswer: "نيويورك",
    answerImageUrl: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800",
    hint: "المركز المالي الشامخ بالولايات المتحدة وبها وول ستريت"
  },
  {
    id: "gen_b1_042",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هو الفرع العلوم الاقتصادية الذي يهتم بسلوك الأفراد والشركات في اتخاذ القرارات وتحديد الأسعار؟",
    options: ["الاقتصاد الجزئي", "الاقتصاد الكلي", "الاقتصاد السلوكي", "الاقتصاد القياسي"],
    correctAnswer: "الاقتصاد الجزئي",
    answerImageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800",
    hint: "يركز على مستوى الأسواق الصغيرة والعرض والطلب الفردي"
  },
  {
    id: "gen_b1_043",
    category: "معلومات عامة",
    points: 400,
    questionText: "من هو المؤسس والمدير التنفيذي لشركة سبيس إكس (SpaceX) وتيسلا (Tesla)؟",
    options: ["إيلون ماسك", "جيف بيزوس", "مارك زوكربرغ", "بيل غيتس"],
    correctAnswer: "إيلون ماسك",
    answerImageUrl: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800",
    hint: "رجل الأعمال الشهير والمثير للجدل مولود في جنوب أفريقيا"
  },
  {
    id: "gen_b1_044",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هو العلم المسؤول عن دراسة الأحافير والصخور والبقايا القديمة للنباتات والحيوانات؟",
    options: ["علم الأحافير (الباليونتولوجيا)", "علم الآثار (الأركيولوجيا)", "الانثروبولوجيا", "علم الجيولوجيا"],
    correctAnswer: "علم الأحافير (الباليونتولوجيا)",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "من خلاله يتعرف العلماء على الديناصورات والكائنات البائدة"
  },
  {
    id: "gen_b1_045",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي المحكمة الدولية التابعة للأمم المتحدة والمختصة بالفض بين النزاعات القانونية بين الدول ومقرها لاهاي؟",
    options: ["محكمة العدل الدولية", "المحكمة الجنائية الدولية", "محكمة حقوق الإنسان", "مجلس الأمن"],
    correctAnswer: "محكمة العدل الدولية",
    answerImageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    hint: "تُعرف أيضاً باسم 'المحكمة العالمية' ومقرها قصر السلام بهولندا"
  },
  {
    id: "gen_b1_046",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هو المصطلحات السريعة التي تصف الصعوبة والبطء في إنتاج التكنولوجيا وسلاسل التوريد والمعادن؟",
    options: ["عنق الزجاجة (Bottleneck)", "الركود التضخمي", "تأثير الفراشة", "الصدمة المالية"],
    correctAnswer: "عنق الزجاجة (Bottleneck)",
    answerImageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800",
    hint: "نقطة اختناق تعطل حركة العمل أو الإنتاج كاملة"
  },
  {
    id: "gen_b1_047",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي أضخم جزيرة في العالم من حيث المساحة ولا تعتبر قارة بحد ذاتها؟",
    options: ["جرينلاند", "مدغشقر", "بورنيو", "غينيا الجديدة"],
    correctAnswer: "جرينلاند",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "تتبع إدارياً لمملكة الدنمارك ومعظمها مغطى بالجليد"
  },
  {
    id: "gen_b1_048",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي المعاهدة الدولية التي تُحدد حظر استخدام وانتشار الأسلحة الكيميائية حول العالم؟",
    options: ["اتفاقية حظر الأسلحة الكيميائية (CWC)", "معاهدة جنيف", "اتفاقية باريس", "معاهدة ان بي تي (NPT)"],
    correctAnswer: "اتفاقية حظر الأسلحة الكيميائية (CWC)",
    answerImageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    hint: "تشرف عليها منظمة OPCW في لاهاي"
  },
  {
    id: "gen_b1_049",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما اسم المرفأ الشهير الذي تعرض لانفجار ضخم لمادة نترات المونيوم عام 2020 في العاصمة اللبنانية؟",
    options: ["مرفأ بيروت", "مرفأ طرابلس", "ميناء صيدا", "ميناء ج Were"],
    correctAnswer: "مرفأ بيروت",
    answerImageUrl: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=800",
    hint: "كارثة هزت العاصمة اللبنانية في أغسطس 2020"
  },
  {
    id: "gen_b1_050",
    category: "معلومات عامة",
    points: 400,
    questionText: "من هو العالم الإنجليزي الذي وضع قوانين الحركة الثلاثة واكتشف قانون الجاذبية العام؟",
    options: ["إسحاق نيوتن", "ستيفن هوكينغ", "مايكل فاراداي", "روبرت هوك"],
    correctAnswer: "إسحاق نيوتن",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "يرتبط اسمه بقصة التفاحة الشهيرة"
  },
  {
    id: "gen_b1_051",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي الدولة الأكثر استهلاكاً وإنتاجاً للشاي في العالم كميةً وحجماً؟",
    options: ["الصين", "الهند", "تركيا", "المملكة المتحدة"],
    correctAnswer: "الصين",
    answerImageUrl: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800",
    hint: "موطن نبات الشاي الاصلي وتنتج مختلف أنواعه"
  },
  {
    id: "gen_b1_052",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما اسم الوكالة الدولية المسؤولة عن مراقبة الاستخدام السلمي للطاقة النووية ومقرها فيينا؟",
    options: ["الوكالة الدولية للطاقة الذرية (IAEA)", "المنظمة العالمية للأرصاد", "اليونيسيف", "منظمة الصحة العالمية"],
    correctAnswer: "الوكالة الدولية للطاقة الذرية (IAEA)",
    answerImageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    hint: "تُعرف بـ 'الذرة من أجل السلام'"
  },
  {
    id: "gen_b1_053",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي الظاهرة المناخية المتمثلة في ارتفاع درجات حرارة مياه المحيط الهادئ الاستوائي وتأثيرها على مناخ العالم؟",
    options: ["ظاهرة النينيو (El Niño)", "ظاهرة النينيا", "الانحتباس الحراري", "الأعاصير القمعية"],
    correctAnswer: "ظاهرة النينيو (El Niño)",
    answerImageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    hint: "اسمها يعني باللغة الإسبانية 'الطفل الصغير'"
  },
  {
    id: "gen_b1_054",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هو مصطلح 'فيتو' (Veto) المستخدم في مجلس الأمن الدولي؟",
    options: ["حق الرفض (النقض)", "حق التصويت المزدوج", "التأجيل الدائم", "حق التعديل"],
    correctAnswer: "حق الرفض (النقض)",
    answerImageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    hint: "تتمتع به الدول الخمس دائمة العضوية لإلغاء أي قرار"
  },
  {
    id: "gen_b1_055",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي العاصمة الرسمية لدولة أستراليا؟",
    options: ["كانبرا", "سيدني", "ملبورن", "بريزبن"],
    correctAnswer: "كانبرا",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "تم اختيارها حلّاً وسطاً بين التنافس بين سيدني وملبورن"
  },
  {
    id: "gen_b1_056",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هو أصل كلمة 'أطلس' التي تُطلق على كتاب الخرائط؟",
    options: ["أسطورة إغريقية لعملاق يحمل السماء", "اسم عالم عربي في الجغرافيا", "مدينة قديمة بالمغرب", "اسم جبل في إفريقيا فقط"],
    correctAnswer: "أسطورة إغريقية لعملاق يحمل السماء",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "يرتبط بالإله الإغريقي Atlas المحكوم عليه بحمل الفلك"
  },
  {
    id: "gen_b1_057",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي العملة المشفرة الرقمية الأولى والأشهر في العالم التي أنشأها شخص مجهول باسم 'ساتوشي ناكاموتو'؟",
    options: ["البيتكوين (Bitcoin)", "الإيثريوم", "الريبل", "الدوجكوين"],
    correctAnswer: "البيتكوين (Bitcoin)",
    answerImageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    hint: "ظهرت عام 2009 كأول عملة رقمية لامركزية"
  },
  {
    id: "gen_b1_058",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي المادة الأكثر صلابة وقسوة والموجودة في الطبيعة؟",
    options: ["الألماس", "الكوارتز", "الجرانيت", "التيتانيوم"],
    correctAnswer: "الألماس",
    answerImageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800",
    hint: "يتكون بالكامل من ذرات الكربون المترابطة بشدة"
  },
  {
    id: "gen_b1_059",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما اسم المنظمة العالمية المسؤولة عن الصحة الوقائية ومكافحة الأوبئة ومقرها جنيف؟",
    options: ["منظمة الصحة العالمية (WHO)", "المنظمة الطبية الدولية", "الصليب الأحمر", "اليونيسيف"],
    correctAnswer: "منظمة الصحة العالمية (WHO)",
    answerImageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800",
    hint: "تأسست عام 1948 وتُصدر التوجيهات الصحية العالمية"
  },
  {
    id: "gen_b1_060",
    category: "معلومات عامة",
    points: 400,
    questionText: "أي دولة تشتهر بأقصر نشيد وطني بدون كلمات ألحان فقط ولديها أطول متوسط أعمار للسكان؟",
    options: ["اليابان", "سويسرا", "موناكو", "سان مارينو"],
    correctAnswer: "اليابان",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "نشيدها الوطني الكيميغايو (Kimigayo) يعتبر أقدم كلماتها"
  },
  {
    id: "gen_b1_061",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هو العلم الخص بشرائح الرقائق الدقيقة ونواقل نصف الموصلات التي تُشغل الأجهزة التكنولوجية الحديثة؟",
    options: ["أشباه الموصلات (Semiconductors)", "النانوتكنولوجي", "الميكاترونكس", "الكهروضوئيات"],
    correctAnswer: "أشباه الموصلات (Semiconductors)",
    answerImageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    hint: "تُصنع أساساً من عنصر السيليكون وتعد صلب التنافس التكنولوجي"
  },
  {
    id: "gen_b1_062",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هو المصنع العالمي الرئيسي الذي يُنتج غالبية رقائق المعالجات المتطورة في العالم ومقره تايوان؟",
    options: ["TSMC", "Intel", "Samsung", "Nvidia"],
    correctAnswer: "TSMC",
    answerImageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    hint: "اختصار لـ Taiwan Semiconductor Manufacturing Company"
  },
  {
    id: "gen_b1_063",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هو المصطلح السياسي الذي يُشير إلى توازن القوى وعدم انحياز الدول في الصراعات الدولية كما حدث في مؤتمر باندونغ؟",
    options: ["حركة عدم الانحياز", "الحرب الباردة", "سياسة الردع", "الوفاق الدولي"],
    correctAnswer: "حركة عدم الانحياز",
    answerImageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    hint: "تأسست في الخمسينيات بقيادة عبد الناصر وتيتو ونهرو"
  },
  {
    id: "gen_b1_064",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هو الكائن الحي الأطول عمراً بين النباتات وتعيش بعض أشجاره لأكثر من 4800 سنة في كاليفورنيا؟",
    options: ["صنوبر بريستلكون (Methuselah)", "شجرة الباوباب", "شجرة الزيتون", "شجرة السيكويا العملاقة"],
    correctAnswer: "صنوبر بريستلكون (Methuselah)",
    answerImageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800",
    hint: "تُعرف بشجرة 'متوشلخ' وتنمو في الجبال العالية"
  },
  {
    id: "gen_b1_065",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما هي الجائزة العالمية الأعلى شأناً والمخصصة لإنجازات الهندسة المعمارية وتُلقب بـ 'نوبل المعمار'؟",
    options: ["جائزة بريتزكر (Pritzker)", "جائزة أغاخان", "جائزة نوبل", "جائزة بوليتزر"],
    correctAnswer: "جائزة بريتزكر (Pritzker)",
    answerImageUrl: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800",
    hint: "منحت للمصممة العرقية الشهيرة زها حديد عام 2004"
  },
  {
    id: "gen_b1_066",
    category: "معلومات عامة",
    points: 400,
    questionText: "ما اسم القناة المائية الاصطناعية التي تربط بين المحيط الأطلسي والمحيط الهادئ في أمريكا Central؟",
    options: ["قناة بنما", "قناة السويس", "قناة كييل", "قناة كورنث"],
    correctAnswer: "قناة بنما",
    answerImageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    hint: "افتتحت عام 1914 لتختصر طرق الملاحة البحرية بين المحيطين"
  },

  // ==========================================
  // --- أسئلة 600 نقطة (صعب) ---
  // ==========================================
  {
    id: "gen_b1_067",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هي الدولة الحبيسة (غير المطلة على بحار) الأكثر سكاناً في العالم وتستعين بموانئ جاراتها؟",
    options: ["إثيوبيا", "بوليفيا", "النيجر", "كازاخستان"],
    correctAnswer: "إثيوبيا",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "فقدت منافذها البحرية بعد استقلال إريتريا عام 1993"
  },
  {
    id: "gen_b1_068",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم النظرية الاقتصادية التي ترى أن السوق يصحح نفسه تلقائياً دون تدخل الدولة عبر 'اليد الخفية'؟",
    options: ["الرأسمالية الكلاسيكية (آدم سميث)", "النظرية الكينزية", "الاشتراكية الماركسية", "النيوليبرالية"],
    correctAnswer: "الرأسمالية الكلاسيكية (آدم سميث)",
    answerImageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800",
    hint: "صاغها العالم الاقتصادي الاسكتلندي في كتابه 'ثروة الأمم'"
  },
  {
    id: "gen_b1_069",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هو الاختراع أو التقنية التي نال عليها العالم أحمد زويل جائزة نوبل في الكيمياء عام 1999؟",
    options: ["كيمياء الفيمتو (Femtochemistry)", "المجهر الإلكتروني", "تقنية الكريسبر", "الليزر الأزرق"],
    correctAnswer: "كيمياء الفيمتو (Femtochemistry)",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "تصوير التفاعلات الكيميائية في جزء من مليون مليار جزء من الثانية"
  },
  {
    id: "gen_b1_070",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم المنظمة الدولية المتخصصة في حماية وحفظ التراث الثقافي والطبيعي العالمي ومقرها باريس؟",
    options: ["اليونسكو (UNESCO)", "اليونيسيف", "الفاو", "الأنكتاد"],
    correctAnswer: "اليونسكو (UNESCO)",
    answerImageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    hint: "منظمة الأمم المتحدة للتربية والعلم والثقافة"
  },
  {
    id: "gen_b1_071",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هي المتلازمة النفسية التي يُبدي فيها الضحية أو الرهينة تعاطفاً وولاءً غير متوقع تجاه خاطفه؟",
    options: ["متلازمة ستوكهولم", "متلازمة ليما", "متلازمة القدس", "متلازمة باريس"],
    correctAnswer: "متلازمة ستوكهولم",
    answerImageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800",
    hint: "سُميت على اسم حادثة سطو على بنك في السويد عام 1973"
  },
  {
    id: "gen_b1_072",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هو مصطلح 'الركود التضخمي' (Stagflation) في علم الاقتصاد؟",
    options: ["تزامن تباطؤ النمو النمو الاقتصادي مع ارتفاع التضخم والبطالة", "انخفاض الأسعار مع نمو مرتفع", "ارتفاع الصادرات مع انخفاض النقد", "انهيار الأسواق المالية فقط"],
    correctAnswer: "تزامن تباطؤ النمو النمو الاقتصادي مع ارتفاع التضخم والبطالة",
    answerImageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800",
    hint: "حالة معقدة يصعب معالجتها بالسياسات النقدية التقليدية"
  },
  {
    id: "gen_b1_073",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم الاتفاقية المناخية العالمية التي وُقعت عام 2015 للحفاظ على ارتفاع حرارة الأرض دون درجتين مئويتين؟",
    options: ["اتفاقية باريس للمناخ", "بروتوكول كيوتو", "اتفاقية مونتريال", "مؤتمر غلاسكو"],
    correctAnswer: "اتفاقية باريس للمناخ",
    answerImageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    hint: "تم التوصل إليها خلال مؤتمر COP21"
  },
  {
    id: "gen_b1_074",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هو اسم المعيار القانوني المتبع لقياس التبعية والجنسية بناءً على 'مكان ولادة الشخص' وليس جنسية والديه؟",
    options: ["حق الأرض (Jus soli)", "حق الدم (Jus sanguinis)", "المواطنة المكتسبة", "حق الإقامة"],
    correctAnswer: "حق الأرض (Jus soli)",
    answerImageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    hint: "مصطلح لاتيني متبع في دول مثل أمريكا وكندا لمنح الجنسية للمواليد"
  },
  {
    id: "gen_b1_075",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هي الجائزة الصحفية والأدبية الأرفع شأناً في الولايات المتحدة وتمنحها جامعة كولومبيا؟",
    options: ["جائزة بوليتزر (Pulitzer)", "جائزة بوكر", "جائزة غونكور", "جائزة نوبل للأدب"],
    correctAnswer: "جائزة بوليتزر (Pulitzer)",
    answerImageUrl: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800",
    hint: "أنشأها الناشر جوزيف بوليتزر وتُمنح سنوياً للصحافة المتميزة"
  },
  {
    id: "gen_b1_076",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم الوكالة الحكومية الأمريكية المختصة بتقديم التوقعات والمعلومات الجغرافية وتعرف بـ 'USGS'؟",
    options: ["هيئة المسح الجيولوجي الأمريكية", "وكالة حماية البيئة", "إدارة المحيطات والغلاف الجوي", "مؤسسة العلوم الوطنية"],
    correctAnswer: "هيئة المسح الجيولوجي الأمريكية",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "تدرس تضاريس أمريكا والموارد الطبيعية والزلازل عالمياً"
  },
  {
    id: "gen_b1_077",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هي الدولة الوحيدة في العالم التي يتألف علمها الوطني من شكلين مثلثين متداخلين وليس مستطيلاً؟",
    options: ["نيبال", "بوتان", "سريلانكا", "جزر المالديف"],
    correctAnswer: "نيبال",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "دولة جبلية في الهيمالايا تضم قمة إيفرست"
  },
  {
    id: "gen_b1_078",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم المفكر السياسي الإيطالي صاحب كتاب 'الأمير' الشهير والمقولة المثيرة للجدل 'الغاية تبرر الوسيلة'؟",
    options: ["نيكولو ميكافيلي", "توماس هوبز", "جان جاك روسو", "جون لوك"],
    correctAnswer: "نيكولو ميكافيلي",
    answerImageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800",
    hint: "كتب دراسته للفلورنسي لورينزو دي ميديتشي في القرن 16"
  },
  {
    id: "gen_b1_079",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هي النسبة الذهبية (Golden Ratio) التقريبية في الرياضيات والفنون والتي يرمز لها بالحرف الإغريقي (Phi - φ)؟",
    options: ["1.618", "3.141", "2.718", "1.414"],
    correctAnswer: "1.618",
    answerImageUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800",
    hint: "تظهر في تناسق الطبيعة وعمارة الأهرامات والبارثينون"
  },
  {
    id: "gen_b1_080",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم المنظمة الاقتصادية الدولية الشاملة التي خلت محل اتفاقية 'الجات' (GATT) عام 1995؟",
    options: ["منظمة التجارة العالمية (WTO)", "البنك الدولي", "صندوق النقد الدولي", "الأونكتاد"],
    correctAnswer: "منظمة التجارة العالمية (WTO)",
    answerImageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    hint: "تنظم قواعد التجارة بين الدول ومقرها جنيف"
  },
  {
    id: "gen_b1_081",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هو العنصر الكيميائي الأكثر وفرة في الكون بأسره؟",
    options: ["الهيدروجين", "الهيليوم", "الأكسجين", "الكربون"],
    correctAnswer: "الهيدروجين",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "يشكل حوالي 75% من المادة العادية في الكون"
  },
  {
    id: "gen_b1_082",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هي الدولة الأكثر إنتاجاً وتصديراً للفضة في العالم؟",
    options: ["المكسيك", "البيرو", "الصين", "روسيا"],
    correctAnswer: "المكسيك",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "تقع في أمريكا الشمالية وتشتهر بجمال مناجمها"
  },
  {
    id: "gen_b1_083",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هي 'معاهدة أنتاركتيكا' الموقعة عام 1959 والتي تحظر أي نشاط عسكري في القارة القطبية الجنوبية؟",
    options: ["معاهدة تخصيص القارة للبحوث السلمية والعلماء", "تقسيم القارة بين 7 دول", "حظر دخول أي إنسان إليها", "إنشاء دولة مستقلة بها"],
    correctAnswer: "معاهدة تخصيص القارة للبحوث السلمية والعلماء",
    answerImageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    hint: "تضمن حرية البحث العلمي وتمنع التجارب النواية أو العسكرية هناك"
  },
  {
    id: "gen_b1_084",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هو المصطلح الفلسفي والأخلاقي الذي يشير إلى تفضيل مصلحة وسعادة أكبر عدد ممكن من الناس؟",
    options: ["النفعية (Utilitarianism)", "الوجودية", "الرواقية", "العدمية"],
    correctAnswer: "النفعية (Utilitarianism)",
    answerImageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800",
    hint: "من أبرز روادها الفيلسوف جيريمي بنثام وجون ستيوارت ميل"
  },
  {
    id: "gen_b1_085",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم العالم النمساوي مؤسس علم الوراثة الحديث بفضل تجاربه الشهيرة على نبات البسلة؟",
    options: ["جريجور مندل", "تشارلز داروين", "لويس باستور", "توماس مورغان"],
    correctAnswer: "جريجور مندل",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "اكتشف القوانين المحددة لوراثة الصفات السائدة والمتنحية"
  },
  {
    id: "gen_b1_086",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هو المصطلح القانوني الدولي الذي يمنح الدبلوماسيين حصانة من الملاحقة القضائية في الدولة المستضيفة؟",
    options: ["الحصانة الدبلوماسية", "الجوء السياسي", "حق الاقتراع", "الفرار الدولي"],
    correctAnswer: "الحصانة الدبلوماسية",
    answerImageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    hint: "منظمة بموجب اتفاقية فيينا للعلاقات الدبلوماسية 1961"
  },
  {
    id: "gen_b1_087",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هي النظرية الفيزيائية التي صاغها أينشتاين وتلخصها المعادلة الشهيرة $E=mc^2$؟",
    options: ["النسبية الخاصة", "النسبية العامة", "ميكانيكا الكم", "النظرية الموجية"],
    correctAnswer: "النسبية الخاصة",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "نُشرت عام 1905 وتربط بين الطاقة والكتلة وسرعة الضوء"
  },
  {
    id: "gen_b1_088",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هي المدينة السويسرية التي تُعد المقر الثاني للأمم المتحدة وتستضيف مقرات منظمة التجارة والصحة والأنكتاد؟",
    options: ["جنيف", "زيورخ", "برن", "لوزان"],
    correctAnswer: "جنيف",
    answerImageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    hint: "تُعرف بمدينة السلام والمؤتمرات الدولية"
  },
  {
    id: "gen_b1_089",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم الوثيقة التاريخية الإنجليزية الصادرة عام 1215 والتي حدت من سلطة الملك وقيدت صلاحياته المطلقة؟",
    options: ["الماجنا كارتا (Magna Carta)", "إعلان حقوق الإنسان", "وثيقة الدستور", "عريضة الحقوق"],
    correctAnswer: "الماجنا كارتا (Magna Carta)",
    answerImageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800",
    hint: "تُعرف أيضاً بـ 'الميثاق الأعظم للحريات'"
  },
  {
    id: "gen_b1_090",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم جهاز تسريع ومصادمة الجسيمات الذرية الأكبر والأقوى في العالم والموجود تحت الحدود الفرنسية السويسرية؟",
    options: ["مصادم الهادرونات الكبير (LHC)", "مفاعل إيتر (ITER)", "تلسكوب هابل", "مشروع مانهاتن"],
    correctAnswer: "مصادم الهادرونات الكبير (LHC)",
    answerImageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
    hint: "تشرفه عليه المنظمة الأوروبية للأبحاث النواية (CERN)"
  },
  {
    id: "gen_b1_091",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم الفيلسوف الفرنسي الذي قال جملته الخالدة 'أنا أفكر، إذن أنا موجود' (الكوغيتو)؟",
    options: ["رينيه ديكارت", "فولتير", "جان جاك روسو", "مونتيسكيو"],
    correctAnswer: "رينيه ديكارت",
    answerImageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800",
    hint: "أبو الفلسفة الحديثة وصاحب المنهج الشكي"
  },
  {
    id: "gen_b1_092",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هي العاصمة الإدارية الرسمية لدولة بولندا؟",
    options: ["وارسو", "كراكوف", "غدانسك", "فروتسواف"],
    correctAnswer: "وارسو",
    answerImageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800",
    hint: "مدينة على نهر فيستولا أُعيد بناؤها بعد الحرب العالمية الثانية"
  },
  {
    id: "gen_b1_093",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم المصطلح النفسي المأخوذ من أسطورة يونانية والمستخدم لوصف الشخص المفتون بذاته بشكل مفرط؟",
    options: ["النرجسية (Narcissism)", "السيكوباتية", "البارانويا", "الهستيريا"],
    correctAnswer: "النرجسية (Narcissism)",
    answerImageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800",
    hint: "نسبة لـ نرجس (Narcissus) الذي وقع في حب انعكاس صورته في الماء"
  },
  {
    id: "gen_b1_094",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هو العلم المسؤول عن دراسة اللغات وتطورها وقواعدها وبنيتها الصوتية والدلالية؟",
    options: ["علم اللغويات (Linguistics)", "علم الفيلولوجيا", "السيميوطيقا", "الانثروبولوجيا"],
    correctAnswer: "علم اللغويات (Linguistics)",
    answerImageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800",
    hint: "يشمل الصوتيات والتراكيب والمعاني"
  },
  {
    id: "gen_b1_095",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم الهيئة الدولية المعنية بمكافحة غسل الأموال وتمويل الإرهاب ومقرها باريس؟",
    options: ["مجموعة العمل المالي (FATF)", "الإنتربول", "صندوق النقد", "منظمة الشفافية الدولية"],
    correctAnswer: "مجموعة العمل المالي (FATF)",
    answerImageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800",
    hint: "تُصدر 'القائمة السوداء' و'القائمة الرمادية' للدول غير الممتثلة"
  },
  {
    id: "gen_b1_096",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هو أقرب جسم فضائي طبيعي يدور حول كوكب الأرض ويتحكم في ظاهرتي المد والجزر؟",
    options: ["القمر", "المريخ", "الشمس", "الزهرة"],
    correctAnswer: "القمر",
    answerImageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    hint: "يبعد عن الأرض حوالي 384 ألف كيلومتر"
  },
  {
    id: "gen_b1_097",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما هي أصغر عضلة في جسم الإنسان حجماً وتوجد داخل الأذن الوسطى؟",
    options: ["العضلة الركابية (Stapedius)", "العضلة الخياطية", "العضلة القاسية", "العضلة المأبضية"],
    correctAnswer: "العضلة الركابية (Stapedius)",
    answerImageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800",
    hint: "طولها أقل من 2 مليمتر وتدعم عظمة الركاب"
  },
  {
    id: "gen_b1_098",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم الاتفاقية التجارية التي تجمع بين الولايات المتحدة والمكسيك وكندا وتعرف بـ 'USMCA'؟",
    options: ["اتفاقية يو إس إم سي إيه (النافتا سابقاً)", "اتفاقية التجارة الحرة للحياد", "الأبيك", "الميركوسور"],
    correctAnswer: "اتفاقية يو إس إم سي إيه (النافتا سابقاً)",
    answerImageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800",
    hint: "حلّت محل اتفاقية NAFTA القديمة"
  },
  {
    id: "gen_b1_099",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم النظام السياسي والاقتصادي الذي ساد في أوروبا خلال القرون الوسطى والمبني على ملكية الأراضي والخدمة العسكرية؟",
    options: ["الإقطاعية (Feudalism)", "الرأسمالية", "الإمبريالية", "المركانتيلية"],
    correctAnswer: "الإقطاعية (Feudalism)",
    answerImageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800",
    hint: "يقوم على العلاقة بين النبلاء اللوردات والأقنان (العمال)"
  },
  {
    id: "gen_b1_100",
    category: "معلومات عامة",
    points: 600,
    questionText: "ما اسم المبدأ السياسي الشهير المنسوب إلى رئيس أمريكي عام 1823 والذي رفض أي تدخل أوربي في شؤون القارتين الأمريكيتين؟",
    options: ["مبدأ مونرو (Monroe Doctrine)", "مبدأ ترومان", "مبدأ إيزنهاور", "مبدأ وودرو ويلسون"],
    correctAnswer: "مبدأ مونرو (Monroe Doctrine)",
    answerImageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
    hint: "أعلنه الرئيس الخامس جيمس مونرو وشكل أساس السياسة الخارجية الأمريكية"
  }
];
