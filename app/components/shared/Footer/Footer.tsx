"use client";
import React from "react";
import { Anchor, Group, ActionIcon, rem } from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
  IconBat,
} from "@tabler/icons-react";
import classes from "./Footer.module.css";

const links = [
  { link: "/contact", label: "Contact" },
  { link: "/privacy", label: "Privacy" },
  { link: "/careers", label: "Careers" },
];

const Footer = () => {
  const items = links.map((link) => (
    <Anchor c="dimmed" key={link.label} href={link.link} lh={1} size="sm">
      {link.label}
    </Anchor>
  ));

  return (
    <div>
      <div className={classes.inner}>
        <IconBat size={28} color="gray" />

        <Group className={classes.links}>{items}</Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" variant="light" radius="xl" color="gray">
            <IconBrandTwitter
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" variant="light" radius="xl" color="gray">
            <IconBrandYoutube
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" variant="light" radius="xl" color="gray">
            <IconBrandInstagram
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
};

export default Footer;
