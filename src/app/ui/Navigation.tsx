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
        key: "LearnData",
        icon: <ThunderboltOutlined />,
    },
    {
        label: (
            <a
                href='https://chat.mice.pub/'
                target='_blank'
                rel='noopener noreferrer'>
                Chat Onlie
            </a>
        ),
        key: "aishort",
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
        key: "Tools",
        icon: <ToolOutlined />,
    },
];
export function Navigation() {
    const pathname = usePathname();
    const [current, setCurrent] = useState(pathname);

    const onClick: MenuProps["onClick"] = (e) => {
        console.log("click ", e);
        setCurrent(e.key);
    };
    return (
        <Row justify='space-between' align='middle' gutter={16}>
            <Col xs={20} sm={18} md={16}>
                <Menu
                    onClick={onClick}
                    selectedKeys={[current]}
                    mode='horizontal'
                    items={items}
                />
            </Col>
            <Col>
                <Row gutter={16} wrap={false}>
                    <Col xs={0} sm={0} md={18}>
                        <a
                            href='/'
                            target='_blank'
                            rel='noopener noreferrer'>
                            <img
                                src='https://img.shields.io/discord/1048780149899939881?color=%2385c8c8&label=Discord&logo=discord&style=for-the-badge'
                                alt='chat on Discord'
                            />
                        </a>
                    </Col>
                    <Col>
                        <a
                            href='/'
                            target='_blank'
                            rel='noopener noreferrer'
                            style={{ marginLeft: "10px" }}>
                            <GithubOutlined style={{ color: "black", fontSize: "24px" }} />
                        </a>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}
