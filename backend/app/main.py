from fastapi import FastAPI
from router.routers import router


app = FastAPI(title="One Rest")
app.include_router(router=router)