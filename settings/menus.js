FullScreenPokemon.prototype.settings.menus = {
    "aliases": {
        "(": "LeftParenthesis",
        ")": "RightParenthesis",
        ":": "Colon",
        ";": "Semicolon",
        "[": "LeftSquareBracket",
        "]": "RightSquareBracket",
        "-": "Hyphen",
        "?": "QuestionMark",
        "!": "ExclamationMark",
        "/": "Slash",
        ".": "Period",
        ",": "Comma",
        "'": "Apostrophe",
        "�": "eFancy"
    },
    "replacements": {
        "PLAYER": "(name)",
        "RIVAL": "Rival's name",
        "POKEMON": "POK�MON",
        "POKEDEX": "POK�DEX"
    },
    "schemas": {
        "GeneralText": {
            "size": {
                "height": 24,
                "width": 100
            },
            "position": {
                "horizontal": "center",
                "vertical": "bottom",
            }
        },
        "Pause": {
            "size": {
                "width": 40,
                "height": 64,
            },
            "position": {
                "horizontal": "center",
                "offset": {
                    "left": 60
                }
            },
            "onDelete": FullScreenPokemon.prototype.closePauseMenu,
            "textXOffset": 8,
            "textYOffset": 8,
            "textPaddingY": 7.75
        },
        "Pokedex": {
            "size": {
                "width": 88,
            },
            "position": {
                "horizontal": "center",
                "vertical": "stretch",
                "offset": {
                    "left": -4
                }
            },
            "childrenSchemas": [{
                "type": "thing",
                "thing": "LineDecorator",
                "position": {
                    "vertical": "stretch",
                    "offset": {
                        "left": 60,
                        "top": 3,
                        "bottom": 3
                    }
                }
            }, {
                "type": "thing",
                "thing": "LineSeparatorHorizontal",
                "size": {
                    "width": 21.5,
                },
                "position": {
                    "horizontal": "right",
                    "offset": {
                        "left": -3,
                        "top": 35,
                    }
                }
            }, {
                "type": "text",
                "words": ["CONTENTS"],
                "position": {
                    "offset": {
                        "left": 7,
                        "top": 7
                    }
                }
            }, {
                "type": "text",
                "words": ["SEEN"],
                "position": {
                    "horizontal": "right",
                    "vertical": "top",
                    "offset": {
                        "left": -13,
                        "top": 11
                    }
                }
            }, {
                "type": "text",
                "words": ["OWN"],
                "position": {
                    "horizontal": "right",
                    "vertical": "top",
                    "offset": {
                        "left": -13,
                        "top": 23
                    }
                }
            }],
            "backMenu": "Pause",
            "startMenu": "PokedexOptions",
            "textSpeed": 0,
            "textXOffset": 7,
            "textYOffset": 11
        },
        "PokedexOptions": {
            "size": {
                "width": 21.5,
                "height": 37
            },
            "position": {
                "horizontal": "right",
                "offset": {
                    "left": -3,
                    "top": 38
                }
            },
            "container": "Pokedex",
            "backMenu": "Pokedex",
            "keepOnBack": true,
            "plain": true,
            "arrowXOffset": 1,
            "textSpeed": 0,
            "textXOffset": 4,
            "textYOffset": 5
        },
        "Pokemon": {
            "size": {
                "width": 88,
                "height": 80
            },
            "position": {
                "horizontal": "center",
                "offset": {
                    "left": -4
                }
            },
            "childrenSchemas": [{
                "type": "menu",
                "name": "PokemonDialog"
            }],
            "onActivate": console.log.bind("HA"),
            "backMenu": "Pause",
            "arrowXOffset": 4,
            "arrowYOffset": 5,
            "textSpeed": 0,
            "textXOffset": 15.75,
            "textYOffset": 3
        },
        "PokemonDialog": {
            "size": {
                "height": 24
            },
            "position": {
                "horizontal": "stretch",
                "vertical": "bottom"
            },
            "childrenSchemas": [{
                "type": "text",
                "words": [
                    "Choose a %%%%%%%POKEMON%%%%%%%"
                ],
                "position": {
                    "offset": {
                        "left": 4,
                        "top": 6
                    }
                }
            }],
            "container": "Pokemon",
            "textSpeed": 0
        },
        "Items": {
            "size": {
                "width": 64,
            },
            "position": {
                "horizontal": "center",
                "vertical": "stretch",
                "offset": {
                    "left": 8
                }
            },
            "backMenu": "Pause",
            "textXOffset": 8,
        },
        "Player": {
            "size": {
                "width": 80,
                "height": 72
            },
            "position": {
                "horizontal": "center",
            },
            "childrenSchemas": [{
                "type": "menu",
                "name": "PlayerTop",
            }, {
                "type": "thing",
                "thing": "DirtWhite",
                "position": {
                    "horizontal": "stretch",
                    "vertical": "center"
                }
            }, {
                "type": "text",
                "words": ["BADGES"],
                "position": {
                    "offset": {
                        "left": 28,
                        "top": 35.5
                    }
                }
            }, {
                "type": "text",
                "words": [["Circle"]],
                "position": {
                    "offset": {
                        "left": 24.5,
                        "top": 37
                    }
                }
            }, {
                "type": "text",
                "words": [["Circle"]],
                "position": {
                    "offset": {
                        "left": 52.5,
                        "top": 37
                    }
                }
            }, {
                "type": "menu",
                "name": "PlayerBottom"
            }],
            "dirty": true,
            "backMenu": "Pause",
            "textSpeed": 0
        },
        "PlayerTop": {
            "size": {
                "width": 77,
                "height": 29,
            },
            "position": {
                "horizontal": "center",
                "offset": {
                    "top": 1.5
                }
            },
            "childrenSchemas": [{
                "type": "text",
                "words": [
                    "NAME/%%%%%%%PLAYER%%%%%%%",
                    "\n",
                    "MONEY/",
                    "\n",
                    "TIME/",
                ],
                "position": {
                    "offset": {
                        "left": 6.5,
                        "top": 6
                    }
                }
            }, {
                "type": "thing",
                "thing": "PlayerPortrait",
                "position": {
                    "horizontal": "right",
                    "vertical": "top",
                    "offset": {
                        "left": -4.5,
                        "top": 3.5
                    }
                }
            }],
            "light": true,
            "container": "Player",
            "textSpeed": 0
        },
        "PlayerBottom": {
            "size": {
                "width": 69,
                "height": 29
            },
            "position": {
                "horizontal": "center",
                "offset": {
                    "top": 41.5
                }
            },
            "childrenSchemas": [{
                "type": "text",
                "words": [
                    ["1Shadow"], ["2Shadow"], ["3Shadow"], ["4Shadow"],
                    ["5Shadow"], ["6Shadow"], ["7Shadow"], ["8Shadow"],
                ],
                "position": {
                    "offset": {
                        "left": 2.5,
                        "top": 3
                    }
                }
            }, {
                "type": "thing",
                "thing": "BrockPortrait",
                "position": {
                    "offset": {
                        "left": 6.5,
                        "top": 6.5
                    }
                }
            }, {
                "type": "thing",
                "thing": "MistyPortrait",
                "position": {
                    "offset": {
                        "left": 22.5,
                        "top": 6.5
                    }
                }
            }, {
                "type": "thing",
                "thing": "LtSurgePortrait",
                "position": {
                    "offset": {
                        "left": 38.5,
                        "top": 6.5
                    }
                }
            }, {
                "type": "thing",
                "thing": "ErikaPortrait",
                "position": {
                    "offset": {
                        "left": 54.5,
                        "top": 6.5
                    }
                }
            }, {
                "type": "thing",
                "thing": "KogaPortrait",
                "position": {
                    "offset": {
                        "left": 6.5,
                        "top": 18
                    }
                }
            }, {
                "type": "thing",
                "thing": "SabrinaPortrait",
                "position": {
                    "offset": {
                        "left": 22.5,
                        "top": 18
                    }
                }
            }, {
                "type": "thing",
                "thing": "BlainePortrait",
                "position": {
                    "offset": {
                        "left": 38.5,
                        "top": 18
                    }
                }
            }, {
                "type": "thing",
                "thing": "GiovanniPortrait",
                "position": {
                    "offset": {
                        "left": 54.5,
                        "top": 18
                    }
                }
            }],
            "light": true,
            "container": "Player",
            "textSpeed": 0,
            "textPaddingX": 8.5,
            "textPaddingY": 12
        }
    }
};