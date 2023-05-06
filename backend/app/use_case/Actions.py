from app.entities.character import characters

async def FindById(id: int):
    for key, value in characters.items():
        if value[0]['ID'] == id:
            return {key: characters[key]}
    raise ValueError("Id nao foi encontrado")    



if __name__ == "__main__":
    result = (FindById(3))
    print(result)
    print(type(result))