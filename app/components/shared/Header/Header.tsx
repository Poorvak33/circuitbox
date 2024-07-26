"use client";
import React from "react";
import { Autocomplete, Group, Burger, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch, IconBat } from "@tabler/icons-react";
import classes from "./Header.module.css";

const links = [
  { link: "/", label: "Home" },
  { link: "/case-evaluator", label: "Case Evaluator" },
  { link: "/dtc-board", label: "DTC Board" },
];

const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <a key={link.label} href={link.link} className={classes.link}>
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          <IconBat size={28} color="grey" />
        </Group>

        <Group>
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {items}
          </Group>
          <Autocomplete
            placeholder="Search"
            leftSection={
              <IconSearch
                style={{
                  width: rem(16),
                  height: rem(16),
                  alignItems: "center",
                }}
                stroke={1.5}
              />
            }
            data={[
              "Tesla",
              "Mercedes-Benz",
              "BMW",
              "Audi",
              "Toyota",
              "Honda",
              "Alfa Romeo",
            ]}
            visibleFrom="xs"
          />
        </Group>
      </div>
    </header>
  );
};

export default Header;
