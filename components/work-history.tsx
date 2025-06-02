"use client";

import React, { useEffect } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { ChevronDownIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";

type TWorkData = {
  id: string;
  label: string;
  value: string;
  description?: string;
  icon?: string;
  disabled?: boolean;
  custom?: React.ReactNode;
};

type WorkHistoryProps = {
  data?: TWorkData[];
  className?: string;
  title?: string;
};

const WorkHistory = ({
  data,
  className,
  title = "Work History",
}: WorkHistoryProps) => {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <MotionConfig
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        ease: "0.65, 0, 0.35, 1",
      }}
    >
      <motion.div className={cn("flex items-center justify-center", className)}>
        <AnimatePresence mode="popLayout">
          {!open ? (
            <motion.div
              whileTap={{ scale: 0.95 }}
              animate={{
                borderRadius: 10,
              }}
              layout
              layoutId="dropdown"
              onClick={() => setOpen(true)}
              className="overflow-hidden rounded-md w-full border border-border bg-background shadow-sm cursor-pointer"
            >
              <WorkHistoryHeader title={title} />
            </motion.div>
          ) : (
            <motion.div
              layout
              animate={{
                borderRadius: 20,
              }}
              layoutId="dropdown"
              className="overflow-hidden rounded-[20px] w-[400px] border border-input bg-background py-2 shadow-md"
              ref={ref}
            >
              <Head setOpen={setOpen} title={title} />
              <div className="w-full overflow-y-auto max-h-80">
                {data?.map((item, index) => (
                  <WorkItem key={item.id} item={item} index={index} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </MotionConfig>
  );
};

export { WorkHistory };

const Head = ({
  setOpen,
  title,
}: {
  setOpen: (open: boolean) => void;
  title: string;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        delay: 0.1,
      }}
      layout
      className="flex items-center justify-between p-4"
    >
      <motion.strong layout className="text-foreground">
        {title}
      </motion.strong>
      <button
        onClick={() => setOpen(false)}
        className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
      >
        <X className="text-secondary-foreground" size={12} />
      </button>
    </motion.div>
  );
};

const WorkHistoryHeader = ({ title }: { title: string }) => {
  return (
    <motion.div
      className="flex items-center justify-between gap-2 p-4 py-3"
      layout
    >
      <div className="flex items-center gap-3">
        <motion.div
          layout
          className="flex h-10 w-10 items-center justify-center rounded-full border border-input"
        >
          💼
        </motion.div>
        <motion.div layout className="flex flex-col">
          <motion.strong
            layout
            className="text-sm font-semibold text-foreground"
          >
            {title}
          </motion.strong>
        </motion.div>
      </div>
      <motion.div
        layout
        className="flex items-center justify-center gap-2 pr-3"
      >
        <ChevronDownIcon className="text-foreground" size={20} />
      </motion.div>
    </motion.div>
  );
};

type WorkItemProps = {
  item: TWorkData;
  index: number;
};

const animation = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: (custom: number) => ({
      delay: custom * 0.05,
      duration: 0.3,
    }),
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: (custom: number) => ({
      delay: custom * 0.02,
    }),
  },
};

const WorkItem = ({ item, index }: WorkItemProps) => {
  return (
    <motion.div
      className="group flex items-center justify-between gap-2 p-4 py-3 hover:bg-accent/50 transition-colors"
      variants={animation}
      initial="hidden"
      animate="visible"
      exit="exit"
      key={`work-item-${item.id}`}
      custom={index}
    >
      <div className="flex items-center gap-3 flex-1">
        <motion.div
          layout
          layoutId={`icon-${item.id}`}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-input bg-background"
        >
          {item.icon}
        </motion.div>
        <motion.div layout className="flex flex-col flex-1 min-w-0">
          <motion.strong
            layoutId={`label-${item.id}`}
            className="text-sm font-semibold text-foreground"
          >
            {item.label}
          </motion.strong>
          {item.description && (
            <span className="text-xs text-muted-foreground line-clamp-2">
              {item.description}
            </span>
          )}
        </motion.div>
      </div>
      {item.custom && <div className="flex-shrink-0">{item.custom}</div>}
    </motion.div>
  );
};

export const data = [
  {
    id: "1",
    label: "Senior Frontend Developer",
    value: "frontend_dev",
    description:
      "Led the development of React applications with TypeScript and modern UI frameworks",
    icon: "💻",
  },
  {
    id: "2",
    label: "Full Stack Engineer",
    value: "fullstack_eng",
    description:
      "Built end-to-end web applications using Node.js, React, and PostgreSQL",
    icon: "🚀",
  },
  {
    id: "3",
    label: "UI/UX Designer",
    value: "ui_designer",
    description:
      "Designed user interfaces and experiences for mobile and web applications",
    icon: "🎨",
  },
  {
    id: "4",
    label: "DevOps Engineer",
    value: "devops_eng",
    description:
      "Managed CI/CD pipelines, AWS infrastructure, and deployment automation",
    icon: "⚙️",
    custom: (
      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
        Current
      </span>
    ),
  },
];
