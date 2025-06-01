import React from "react";
import { Eye, Paperclip } from "lucide-react";

type ProfileCardProps = {
  variant?: "light" | "dark";
  profileImage?: string;
  name: string;
  description: string;
  followersCount: number;
  postsCount: number;
  verified?: boolean;
  isFullBg?: boolean;
  onFollow?: () => void;
};

export const ProfileCard: React.FC<ProfileCardProps> = ({
  profileImage = "https://images.unsplash.com/photo-1741802872469-b404a312fa91?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  name,
  description,
  followersCount,
  postsCount,
  verified = true,
  isFullBg = false,
}) => {
  if (isFullBg) {
    return (
      <div className="w-80 lg:w-96 h-[28rem] rounded-md bg-background border border-border p-1.5">
        <div className="relative h-full overflow-hidden rounded-lg">
          {/* Full background image */}
          <div className="aspect-square h-full w-full">
            <img
              src={profileImage}
              alt={`${name}'s profile`}
              className="h-full w-full object-cover"
            />
            {/* Gradient overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          </div>

          {/* Content positioned at the bottom */}
          <div className="absolute bottom-0 left-0 w-full p-6 text-white">
            <div className="mb-2 flex items-center justify-center">
              <h2 className="pb-0 text-2xl font-bold">{name}</h2>
              {verified && (
                <div className="ml-2 flex items-center justify-center">
                  <svg
                    viewBox="0 0 22 22"
                    aria-label="Verified account"
                    role="img"
                    className="fill-secondary size-5"
                    data-testid="icon-verified"
                  >
                    <g>
                      <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path>
                    </g>
                  </svg>
                </div>
              )}
            </div>
            <p className="mt-0 text-center text-sm text-gray-200">
              @sophiebennett
            </p>
            <p className="mb-6 text-center text-gray-200">{description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <Eye size={15} className="text-white" />
                <span className="text-sm font-medium">{followersCount}</span>
              </div>

              <div className="flex items-center space-x-1">
                <Paperclip size={15} className="text-white" />
                <span className="text-sm font-medium">{postsCount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-80 lg:w-96 rounded-md bg-background border border-border p-1.5 transition-transform ">
      <div className="overflow-hidden rounded-lg">
        <img
          src={profileImage}
          alt={`${name}'s profile`}
          className="aspect-square w-full object-cover max-h-80"
        />
      </div>

      <div className="p-4">
        <div className="mb-2 flex items-center">
          <h2 className="pb-0 text-2xl font-bold text-black dark:text-white">
            {name}
          </h2>
          {verified && (
            <div className="ml-2 flex items-center justify-center">
              <svg
                viewBox="0 0 22 22"
                aria-label="Verified account"
                role="img"
                className="fill-secondary size-5"
                data-testid="icon-verified"
              >
                <g>
                  <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path>
                </g>
              </svg>
            </div>
          )}
        </div>
        <p className="-mt-2 text-sm text-gray-800 dark:text-gray-200">
          @sophiebennett
        </p>
        <p className="mb-6 text-gray-800 dark:text-gray-200">{description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Eye size={15} className="text-gray-800 dark:text-white" />
            <span className="text-sm font-medium">{followersCount}</span>
          </div>

          <div className="flex items-center space-x-1">
            <Paperclip size={15} className="text-gray-800 dark:text-white" />
            <span className="text-sm font-medium">{postsCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
