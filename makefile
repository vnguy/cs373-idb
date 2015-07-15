FILES :=                                  \
    .gitignore                            \
    .travis.yml                           \
    apiary.apib                           \
    IDB.log                               \
    models.html                           \
    models.py                             \
    tests.py                              \
    UML.pdf				  \

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

test: tests.out
	python 3 manage.py test

models.html:
	export DJANGO_SETTINGS_MODULE="main.settings"
	pydoc3 -w ./
	mv copaDB.models.html copaDB/models.html
	rm -rf *.html
	mv copaDB/models.html models.html

IDB.log:
	git log > IDB.log

tests.out: tests.py
	coverage3 run --branch tests.py >  tests.out 2>&1
	coverage3 report  -m                      >> tests.out
	cat tests.out

