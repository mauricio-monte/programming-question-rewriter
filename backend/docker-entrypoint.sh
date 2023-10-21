#!/bin/sh

set -e

. /app/.venv/bin/activate

if [ -z "$PORT" ]; then
  PORT=8000
fi

exec uvicorn app.server:app --port $PORT