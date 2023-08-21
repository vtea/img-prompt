"use client";

import React, { useState } from "react";
import {
  BgColorsOutlined,
  ExperimentOutlined,
  ThunderboltOutlined,
  GithubOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu, Row, Col } from "antd";
import { usePathname } from "next/navigation";
import Link from "next/link";

const items: MenuProps["items"] = [
  {
    label: <Link href='/'>IMGPrompt</Link>,
    key: "/",
    icon: <BgColorsOutlined />,
  },
  {
    label: (
      <a
        href='https://aiprm.cn2.ltd'
        target='_blank'
        rel='noopener noreferrer'>
        Aiprompt
      </a>
    ),
    key: "Aiprompt",
    icon: <ThunderboltOutlined />,
  },
  {
    label: (
      <a
        href='https://chat.mice.pub/'
        target='_blank'
        rel='noopener noreferrer'>
        Chat Online
      </a>
    ),
    key: "chatonline",
    icon: <ExperimentOutlined />,
  },
  {
    label: (
      <a
        href='https://doc.mice.pub'
        target='_blank'
        rel='noopener noreferrer'>
        Doc
      </a>
    ),
    key: "Doc",
    icon: <ToolOutlined />,
  },
];
