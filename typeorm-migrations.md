# Seeding & Migrations in TypeORM

## What is the purpose of database migrations in TypeORM?
Migrations provide controlled, versioned schema changes instead of auto-syncing,
making it safe to evolve the database in production without data loss.

## How do migrations differ from seeding?
Migrations change the database **structure** (tables, columns).
Seeding populates the database with **initial data**.

## Why is it important to version-control schema changes?
So every environment (dev, staging, production) applies the same changes
in the same order, and changes can be reviewed and rolled back if needed.

## How can you roll back a migration if an issue occurs?
Run `migration:revert` — TypeORM runs the `down()` method of the last
migration, undoing the schema change.