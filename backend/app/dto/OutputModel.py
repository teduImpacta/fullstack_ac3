from pydantic import BaseModel
from typing import List, Dict



class Character(BaseModel):
    ID: int
    Age: str = None
    Bounty: str = None
    Devil_Fruit: str = None
    Affiliation: str = None
    Swords: str = None
    Weapon: str = None
    Form: str = None
    Ability: str = None


class OnePieceCharacters(BaseModel):
    data: Dict[str, List[Character]]