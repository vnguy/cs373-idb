FILES :=                                  \
    .gitignore                            \
    .travis.yml                           \
    apiary.apib                           \
    IDB.log                               \
    models.html                           \
    models.py                             \
    tests.py                              \
    UML.pdf				  \
    models.in			  	  \
    models.out				  \
    tests.out				  \

all:

check:
	@for i in $(FILES);                                     \
    do                                                          \
        [ -e $$i ] && echo "$$i found" || echo "$$i NOT FOUND"; \
    done

clean:
	rm -f  .coverage
	rm -f  *.pyc
	rm -rf __pycache__
	rm -f models.out
	rm -f tests.out

config:
	git config -l

test: models.out tests.out

models.html: models.py
	pydoc3 -w models

IDB.log:
	git log > IDB.log

models.out: models.py
	cat models.in
	./models.py < models.in > models.out
	cat models.out

tests.out: tests.py
	coverage3 run --branch tests.py >  tests.out 2>&1
	coverage3 report  -m                      >> tests.out
	cat tests.out

