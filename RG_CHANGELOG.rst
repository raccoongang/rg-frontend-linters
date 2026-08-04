RG Changelog
############

All notable changes to this project will be documented in this file.

The format is based on `Keep a Changelog <https://keepachangelog.com/en/1.0.0/>`_,
and this project adheres to customized Semantic Versioning e.g.: `redwood-rg.1`

[Unreleased]
************

Changed
=======
* **Breaking:** ``@commitlint/config-conventional`` v21 ships with this package and requires Node
  ``>=22.12.0`` in the consuming repository. Stay on ``1.0.0`` on older runtimes (VERA-4)
* Bumped ``@openedx/frontend-build`` to 14.6.6 and ``webpack-merge`` to v6 (VERA-4)

Fixed
=====
* CommitLint config resolved ``@commitlint/config-conventional`` from the consuming repository instead
  of from this package, as #8 fixed for Stylelint. Consumers no longer declare it, nor
  ``@edx/stylelint-config-edx`` (VERA-4)

Added:
======
* no-missing-end-of-source-newline rule to stylelint (RGInt-303)
* initialize project structure and add default configs (RGInt-303)

  - add CI checkers: tests, linters checkers
  - add configs and tests
  - add documentation
