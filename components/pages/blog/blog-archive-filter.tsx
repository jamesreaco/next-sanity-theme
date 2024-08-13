"use client"
import { cn } from "@/utils/cn";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { Dispatch, SetStateAction } from "react";
import { PostCategory } from "@/types/documents/post";

export default function BlogArchiveFilter({ categories, handleFilterPosts }: {
  categories: PostCategory[]
  handleFilterPosts: (slug: string) => void
}) {

  const [open, setOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<string>('All Posts');

  const variants = {
    open: {
      scaleY: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      scaleY: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
  }

  const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  }
    
  return (
    <motion.div 
      animate={open ? "open" : "closed"} 
      className="mt-8 xl:mt-0 relative z-20 w-[14rem]"
    >
      <button
        onClick={() => setOpen((open) => !open)}
        className="w-full flex items-center justify-between gap-2 px-5 py-3 rounded-lg border text-black bg-white"
      >
        <span className="font-medium antialiased text-base">
          {currentCategory ? `${currentCategory}` : 'All Posts'}
        </span>
        <motion.span variants={iconVariants}>
          <FiChevronDown />
        </motion.span>
      </button>
      <motion.ul
        variants={variants}
        initial={variants.closed}
        style={{ originY: "top", translateX: "-50%" }}
        className="flex flex-col gap-2 p-2 rounded-xl bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
      >
        <motion.li
          variants={variants}
          onClick={() => {
            handleFilterPosts('all')
            setCurrentCategory('All Posts')
            setOpen(false)
          }}
          className={cn('flex items-center gap-2 w-full py-2 px-3 text-sm font-medium antialiased whitespace-nowrap rounded-lg hover:bg-[#F6F6F1] text-black cursor-pointer', {
            'bg-black text-white hover:bg-black': currentCategory === 'All Posts',
          })}
        >
          <span>
            All Posts
          </span>
        </motion.li>
        {categories?.map((category) => (
          <CategoryItem
            key={category.slug}
            setOpen={setOpen} 
            category={category}
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
            handleFilterPosts={handleFilterPosts}
          />
        ))}
      </motion.ul>
    </motion.div>
  );
};

function CategoryItem({ setOpen, category, handleFilterPosts, currentCategory, setCurrentCategory }: {
  category: PostCategory
  currentCategory: string | null
  handleFilterPosts: (slug: string) => void
  setOpen: Dispatch<SetStateAction<boolean>>
  setCurrentCategory: Dispatch<SetStateAction<string | null>>
}) {

  function handleClick() {
    handleFilterPosts(category.slug)
    setCurrentCategory(category.title)
    setOpen(false)
  }

  const variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
      },
    },
    closed: {
      opacity: 0,
      y: -15,
      transition: {
        when: "afterChildren",
      },
    },
  };

  return (
    <motion.li
      variants={variants}
      onClick={() => handleClick()}
      className={cn('flex items-center gap-2 w-full py-2 px-3 text-sm font-medium antialiased whitespace-nowrap rounded-lg hover:bg-[#F6F6F1] text-black cursor-pointer', {
        'bg-black text-white hover:bg-black': category.title === currentCategory,
      })}
    >
      <span>
        {category.title}
      </span>
    </motion.li>
  );
}