import React from "react";
import { HiHome } from "react-icons/hi";
import { IoWallet } from "react-icons/io5";
import { MdInsertChart } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";

import { ReactComponent as Refah } from "../SVG Assets/Bank/Mono/Refah.svg";
import { ReactComponent as Saderat } from "../SVG Assets/Bank/Mono/Saderat.svg";
import { ReactComponent as Saman } from "../SVG Assets/Bank/Mono//Saman.svg";
import { ReactComponent as Shahr } from "../SVG Assets/Bank/Mono/Shahr.svg";
import { ReactComponent as Sina } from "../SVG Assets/Bank/Mono/Sina.svg";
import { ReactComponent as Mellat } from "../SVG Assets/Bank/Mono/Mellat.svg";
import { ReactComponent as Tejarat } from "../SVG Assets/Bank/Mono/Tejarat.svg";
import { ReactComponent as Melli } from "../SVG Assets/Bank/Mono/Melli.svg";

import { ReactComponent as RefahC } from "../SVG Assets/Bank/Color/Refah.svg";
import { ReactComponent as SaderatC } from "../SVG Assets/Bank/Color/Saderat.svg";
import { ReactComponent as SamanC } from "../SVG Assets/Bank/Color//Saman.svg";
import { ReactComponent as ShahrC } from "../SVG Assets/Bank/Color/Shahr.svg";
import { ReactComponent as SinaC } from "../SVG Assets/Bank/Color/Sina.svg";
import { ReactComponent as TejaratC } from "../SVG Assets/Bank/Color/Tejarat.svg";
import { ReactComponent as MellatC } from "../SVG Assets/Bank/Color/Mellat.svg";
import { ReactComponent as MelliC } from "../SVG Assets/Bank/Color/Melli.svg";

export const banks = {
  refah: Refah,
  saderat: Saderat,
  saman: Saman,
  mellat: Mellat,
  melli: Melli,
  sina: Sina,
  tejarat: Tejarat,
  shahr: Shahr,
};
export const banksColor = {
  refah: RefahC,
  saderat: SaderatC,
  saman: SamanC,
  mellat: MellatC,
  melli: MelliC,
  sina: SinaC,
  tejarat: TejaratC,
  shahr: ShahrC,
};
export const banksName = {
  refah: "بانک رفاه",
  saderat: "بانک صادرات",
  saman: "بانک سامان",
  mellat: "بانک ملت",
  melli: "بانک ملی",
  sina: "بانک سینا",
  tejarat: "بانک تجارت",
  shahr: "بانک شهر",
};

export const banksNameArr = [
  "refah",
  "saderat",
  "saman",
  "mellat",
  "melli",
  "sina",
  "tejarat",
  "shahr",
];

export const LINKS_DATA = [
  { icon: <HiHome />, title: "داشبورد", path: "/" },
  { icon: <IoWallet />, title: "کیف پول", path: "/card" },
  { icon: <MdInsertChart />, title: "آمار", path: "/statistic" },
  { icon: <IoMdPerson />, title: "پروفایل", path: "/profile" },
];
