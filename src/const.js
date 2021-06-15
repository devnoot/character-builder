export const STEPS = {
  NAME_INPUT: "NAME_INPUT",
  RACE_SELECT: "RACE_SELECT",
  GENDER_SELECT: "GENDER_SELECT",
  HEADGEAR_SELECT: "HEADGEAR_SELECT",
  ARMOR_SELECT: "ARMOR_SELECT",
  LEGS_SELECT: "LEGES_SELECT"
}

export const GENDER = {
  MALE: "Male",
  FEMALE: "Female",
  UNKNOWN: "Unknown"
}

export const RACES = {
  CENTAUR: {
    key: "CENTAUR",
    name: "Centaur",
    genders: [GENDER.MALE, GENDER.FEMALE],
    images: { 
      default: "centaur_brown_female.png",
      defaultMale: "centaur_brown_male.png",
      defaultFemale: "centaur_brown_female.png",
      byGender: {
        male: {
          brown: "centaur_brown_male.png",
          darkbrown: "centaur_darkbrown_male.png",
          darkgrey: "centaur_darkgrey_male.png",
          lightbrown: "centaur_lightbrown_male.png",
          lightgrey: "centaur_lightgrey_male.png" 
        },
        female: {
          brown: "centaur_brown_female.png",
          darkbrown: "centaur_darkbrown_female.png",
          darkgrey: "centaur_darkgrey_female.png",
          lightbrown: "centaur_lightbrown_female.png",
          lightgrey: "centaur_lightgrey_female.png" 
        }
      },
      byColor: {
        brown: {
          male: "centaur_brown_male.png",
          female: "centaur_brown_female.png"
        },
        darkbrown: {
          male: "centaur_darkbrown_male.png",
          female: "centaur_darkbrown_female.png"
        },
        darkgrey: {
          male: "centaur_darkgrey_male.png",
          female: "centaur_darkgrey_female.png"
        },
        lightbrown: {
          male: "centaur_lightbrown_male.png",
          female: "centaur_lightbrown_female.png"
        },
        lightgrey: {
          male: "centaur_lightgrey_male.png",
          female: "centaur_lightgrey_female.png"
        }
      }
    },
  },
  DEEP_DWARF: {
    key: "DEEP_DWARF",
    name: "Deep Dwarf",
    genders: [GENDER.MALE, GENDER.FEMALE],
    images: { 
      default: "deep_dwarf_female.png",
      defaultMale: "deep_dwarf_male.png",
      defaultFemale: "deep_dwarf_female.png"
    }
  },
  DEEP_ELF: {
    key: "DEEP_ELF",
    name: "Deep Elf",
    genders: [GENDER.MALE, GENDER.FEMALE],
    images: { 
      default: "deep_elf_female.png",
      defaultMale: "deep_elf_male.png",
      defaultFemale: "deep_elf_female.png"
    }
  },
  DEMIGOD: {
    key: "DEMIGOD",
    name: "Demi God",
    genders: [GENDER.MALE],
    images: {
      default: "demigod_male.png",
      defaultMale: "demigod_male.png"
    }
  }, 
  DEMONSPAWN: {
    key: "DEMONSPAWN",
    name: "Demon Spawn",
    genders: [GENDER.MALE, GENDER.FEMALE],
    images: {
      default: "demonspawn_black_female.png",
      defaultMale: "demonspawn_black_male.png",
      defaultFemale: "demonspawn_black_female.png"
    }
  },
  DRACONIAN: { 
    key: "DRACONIAN",
    name: "Draconian",
    genders: [GENDER.MALE, GENDER.FEMALE],
    images: {
      default: "draconian_female.png",
      defaultMale: "draconian_male.png",
      defaultFemale: "draconian_female.png"
    }
  },
  DWARF: {
    key: "DWARF",
    name: "Dwarf",
    genders: [GENDER.MALE, GENDER.FEMALE],
    images: {
      default: "dwarf_female.png",
      defaultMale: "dwarf_male.png",
      defaultFemale: "dwarf_female.png"
    }
  }, 
  ELF: {
    key: "ELF",
    name: "Elf",
    genders: [GENDER.MALE, GENDER.FEMALE],
    images: {
      default: "elf_female.png",
      defaultMale: "elf_male.png",
      defaultFemale: "elf_female.png"
    }
  },
  FORMICID: {
    key: "FORMICID",
    name: "Formicid",
    genders: [GENDER.UNKNOWN],
    images: {
      default: "formicid.png"
    }
  },
  GARGOYLE: {
    key: "GARGOYLE",
    name: "Gargoyle",
    genders: [GENDER.MALE, GENDER.FEMALE],
    images: {
      default: "gargoyle_female.png",
      defaultMale: "gargoyle_male.png",
      defaultFemale: "gargoyle_female.png"
    }
  },
  GHOUL: {
    key: "GHOUL",
    name: "Ghoul",
    genders: [GENDER.UNKNOWN],
    images: {
      default: "ghoul.png",
    }
  },
  GHOUL2: {
    key: "GHOUL2",
    name: "Ghoul2",
    genders: [GENDER.MALE, GENDER.FEMALE],
    images: {
      default: "ghoul_2_female.png",
      defaultMale: "ghoul_2_male.png",
      defaultFemale: "ghoul_2_female.png"
    }
  },
  GNOME: {
    key: "GNOME",
    name: "Gnome",
    genders: [GENDER.MALE, GENDER.FEMALE],
    images: {
      default: "gnome_female.png",
      defaultMale: "gnome_male.png",
      defaultFemale: "gnome_female.png"
    }
  },
  HALFLING: {
    key: "HALFLING",
    name: "Halfling",
    genders: [GENDER.MALE, GENDER.FEMALE],
    images: {
      default: "halfling_female.png",
      defaultMale: "halfling_male.png",
      defaultFemale: "halfling_female.png"
    }
  },
  HUMAN: {
    key: "HUMAN",
    name: "Human",
    genders: [GENDER.MALE, GENDER.FEMALE],
    images: {
      default: "human_female.png",
      defaultMale: "human_male.png",
      defaultFemale: "human_female.png"
    }
  },
  KENKU_WINGED: {
    key: "KENKU_WINGED",
    name: "Winged Kenku",
    genders: [GENDER.MALE, GENDER.FEMALE],
    images: {
      default: "kenku_winged_female.png",
      defaultMale: "kenku_winged_male.png",
      defaultFemale: "kenku_winged_female.png"
    }
  },
  KENKU_WINGLESS: {
    key: "KENKU_WINGLESS",
    name: "Wingless Kenku",
    genders: [GENDER.MALE, GENDER.FEMALE],
    images: {
      default: "kenku_wingless_female.png",
      defaultMale: "kenku_wingless_male.png",
      defaultFemale: "kenku_wingless_female.png"
    }
  },
  KOBOLD: {
    key: "KOBOLD",
    name: "Kobold",
    genders: [GENDER.MALE, GENDER.FEMALE],
    images: {
      default: "kobold_female_new.png",
      defaultMale: "kobold_male_new.png",
      defaultFemale: "kobold_female_new.png"
    }
  },
  LORC: {
    key: "LORC",
    name: "Lorc",
    genders: [GENDER.MALE, GENDER.FEMALE],
    images: {
      default: "lorc_female_0.png",
      defaultMale: "lorc_male_0.png",
      defaultFemale: "lorc_female_0.png"
    }
  },
  MERFOLK: {
    key: "MERFOLK",
    name: "Merfolk",
    genders: [GENDER.MALE, GENDER.FEMALE],
    images: {
      default: "merfolk_female.png",
      defaultMale: "merfolk_male.png",
      defaultFemale: "merfolk_female.png"
    }
  },
  MINOTAUR: {
    key: "MINOTAUR",
    name: "Minotaur",
    genders: [GENDER.MALE, GENDER.FEMALE],
    images: {
      default: "minotaur_female.png",
      defaultMale: "minotaur_male.png",
      defaultFemale: "minotaur_female.png"
    }
  },
  MUMMY: {
    key: "MUMMY",
    name: "Mummy",
    genders: [GENDER.MALE, GENDER.FEMALE],
    images: {
      default: "mummy_female.png",
      defaultMale: "mummy_male.png",
      defaultFemale: "mummy_female.png"
    }
  },
  NAGA: {
    key: "NAGA",
    name: "Naga",
    genders: [GENDER.MALE, GENDER.FEMALE],
    images: {
      default: "naga_female.png",
      defaultMale: "naga_male.png",
      defaultFemale: "naga_female.png"
    }
  },
  OCTOPODE: {
    key: "OCTOPODE",
    name: "Octopode",
    genders: [GENDER.UNKNOWN],
    images: {
      default: "octopode_1.png"
    }
  },
  OGRE: {
    key: "OGRE",
    name: "Ogre",
    genders: [GENDER.MALE, GENDER.FEMALE],
    images: {
      default: "ogre_female.png",
      defaultMale: "ogre_male.png",
      defaultFemale: "ogre_female.png"
    }
  },
  SHADOW: {
    key: "SHADOW",
    name: "Shadow",
    genders: [GENDER.UNKNOWN],
    images: {
      default: "shadow.png"
    }
  },
  SPRIGGAN: {
    key: "SPRIGGAN",
    name: "Spriggan",
    genders: [GENDER.MALE, GENDER.FEMALE],
    images: {
      default: "spriggan_female.png",
      defaultMale: "spriggan_male.png",
      defaultFemale: "spriggan_female.png",
    }
  },
  TENGU: {
    key: "TENGU",
    name: "Tengu",
    genders: [GENDER.MALE, GENDER.FEMALE],
    images: {
      default: "tengu_wingless_brown_female.png",
      defaultMale: "tengu_wingless_brown_male.png",
      defaultFemale: "tengu_wingless_brown_female.png",
    }
  },
  TROLL: {
    key: "TROLL",
    name: "Troll",
    genders: [GENDER.MALE, GENDER.FEMALE],
    images: {
      default: "troll_female.png",
      defaultMale: "troll_male.png",
      defaultFemale: "troll_female.png"
    }
  },
  VAMPIRE: {
    key: "VAMPIRE",
    name: "Vampire",
    genders: [GENDER.MALE, GENDER.FEMALE],
    images: {
      default: "vampire_female.png",
      defaultMale: "vampire_male.png",
      defaultFemale: "vampire_female.png"
    }
  }
}