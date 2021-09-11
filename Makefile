SRC = $(shell find src -name '*.js' | sort)
PAGES = $(patsubst src/pages/%.js,public/%/index.html,$(shell find src/pages -name '*.js' | sort))


.PHONY: all
all: $(PAGES)

public/players:
	mkdir -p -- '$@'

public/players/index.html: src/pages/players.js $(SRC) public/players
	NODE_ENV=production node -- '$<' >'$@'
