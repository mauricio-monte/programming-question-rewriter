#!/bin/sh

set -e

. /app/.venv/bin/activate

exec uvicorn app.server:app