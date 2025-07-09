"use client"

import type React from "react"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"

export type GlowingBoxButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  animationSpeed?: string
  active?: boolean
}

export const GlowingBoxButton = forwardRef<HTMLButtonElement, GlowingBoxButtonProps>(
  ({ className, animationSpeed = "4s", active = true, children, ...props }, ref) => {
    return (
      <>
        <style jsx>{`
          .glowing-box {
            isolation: isolate;
            overflow: hidden;
            border-radius: 8px;
            display: inline-block;
            position: relative;
          }

          .glowing-box-active .glowing-box-animations,
          .glowing-box-active .glowing-box-borders-masker {
            opacity: 1;
          }

          .glowing-box-animations {
            opacity: 0;
            pointer-events: none;
            transition: 1s ease opacity;
          }

          .glowing-box-animations,
          .glowing-box-borders {
            left: 50%;
            position: absolute;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
          }

          .glowing-box-borders-masker {
            border-radius: 8px;
            content: "";
            height: 100%;
            right: 0;
            bottom: 0;
            left: 0;
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            opacity: 0;
            padding: 1px;
            pointer-events: none;
            position: absolute;
            top: 0;
            transition: 1s ease opacity;
            width: 100%;
          }

          .glowing-box-borders,
          .glowing-box-glow,
          .glowing-box-stars {
            animation: borderTurn var(--animation-speed) infinite linear;
            background-image: conic-gradient(
              from 0deg at 50% 50%,
              #E64CEB,
              rgba(130, 43, 133, 0) 60deg,
              rgba(130, 43, 133, 0) 310deg,
              #E64CEB 360deg
            );
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
          }

          .glowing-box-animations:before,
          .glowing-box-borders:before {
            content: "";
            float: left;
            padding-top: 100%;
          }

          .glowing-box-animations:after,
          .glowing-box-borders:after {
            clear: both;
            content: "";
            display: block;
          }

          .glowing-box-button {
            background: radial-gradient(107.5% 107.5% at 50% 215%, rgba(230, 76, 235, 0.24), rgba(230, 76, 235, 0)),
              rgba(130, 43, 133, 0.04);
            border: 1px solid rgba(230, 76, 235, 0.3);
            border-radius: 8px;
            cursor: pointer;
            padding: 7px 24px;
            position: relative;
            z-index: 1;
            font-size: 14px;
            font-weight: 500;
            letter-spacing: -0.01em;
            line-height: 24px;
            color: white;
            transition: all 0.2s ease;
          }

          .glowing-box-button:hover {
            background: radial-gradient(107.5% 107.5% at 50% 215%, rgba(230, 76, 235, 0.3), rgba(230, 76, 235, 0)),
              rgba(130, 43, 133, 0.08);
            border-color: rgba(230, 76, 235, 0.5);
          }

          @keyframes borderTurn {
            0% {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            100% {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }
        `}</style>
        
        <div
          className={cn("glowing-box", active && "glowing-box-active")}
          style={{ "--animation-speed": animationSpeed } as React.CSSProperties}
        >
          {/* 动画层 */}
          <div className="glowing-box-animations">
            <div className="glowing-box-glow"></div>
            <div className="glowing-box-stars-masker">
              <div className="glowing-box-stars"></div>
            </div>
          </div>

          {/* 边框遮罩层 */}
          <div className="glowing-box-borders-masker">
            <div className="glowing-box-borders"></div>
          </div>

          {/* 按钮本体 */}
          <button className={cn("glowing-box-button", className)} ref={ref} {...props}>
            <span>{children}</span>
          </button>
        </div>
      </>
    )
  },
)
GlowingBoxButton.displayName = "GlowingBoxButton"
